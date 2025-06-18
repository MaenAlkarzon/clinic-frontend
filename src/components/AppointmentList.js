import React, { useEffect, useState } from 'react';

const AppointmentList = ({ api, refresh, onEdit }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get('/appointments').then(res => setAppointments(res.data));
  }, [refresh]);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this appointment?')) {
      await api.delete(`/appointments/${id}`);
      setAppointments(prev => prev.filter(appt => appt.id !== id));
    }
  };

  return (
    <div className="table">
      <div className="table-row table-header">
        <div>First Name</div>
        <div>Last Name</div>
        <div>Student number</div>
        <div>Date</div>
        <div>Time</div>
        <div>Actions</div>
      </div>

      {appointments.map(appt => (
        <div className="table-row" key={appt.id}>
          <div>{appt.first_name}</div>
          <div>{appt.last_name}</div>
          <div>{appt.student_number}</div>
          <div>{appt.appointment_date.split('T')[0]}</div>
          <div>{appt.appointment_time}</div>
          <div>
            <button className="submit-btn" onClick={() => onEdit(appt)}>Edit</button>
            <button className="submit-btn" onClick={() => handleDelete(appt.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
