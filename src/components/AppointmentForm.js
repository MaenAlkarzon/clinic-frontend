import React, { useEffect, useState } from 'react';

const AppointmentForm = ({ api, onAppointmentSaved, appointmentToEdit, clearEdit }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    student_number: '',
    appointment_date: '',
    appointment_time: ''
  });

  useEffect(() => {
    if (appointmentToEdit) setFormData(appointmentToEdit);
  }, [appointmentToEdit]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (appointmentToEdit) {
        await api.put(`/appointments/${appointmentToEdit.id}`, formData);
      } else {
        await api.post('/appointments', formData);
      }
      onAppointmentSaved();
      clearEdit();
      setFormData({
        first_name: '',
        last_name: '',
        student_number: '',
        appointment_date: '',
        appointment_time: ''
      });
    } catch (err) {
      alert(err.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <input
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      <input
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
      />
      <input
        name="student_number"
        placeholder="Student Number"
        value={formData.student_number}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="appointment_date"
        value={formData.appointment_date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="appointment_time"
        value={formData.appointment_time}
        onChange={handleChange}
        required
      />
      <button type="submit" className="submit-btn">
        {appointmentToEdit ? 'Update' : 'Book'} Appointment
      </button>
      {appointmentToEdit && (
        <button type="button" className="submit-btn" onClick={clearEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default AppointmentForm;
