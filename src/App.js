import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './styles.css';

// Create Axios instance here instead of api.js
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

function App() {
  const [refresh, setRefresh] = useState(false);
  const [appointmentToEdit, setAppointmentToEdit] = useState(null);
  const [weather, setWeather] = useState(null);


  // Handle form submission (add or update)
  const handleSaved = () => {
    setAppointmentToEdit(null);
    setRefresh(prev => !prev);
  };

  // Cancel editing
  const clearEdit = () => setAppointmentToEdit(null);

  // Pass appointment to form for editing
  const handleEdit = (appointment) => setAppointmentToEdit(appointment);
  //Weather in Amman using API
  useEffect(() => {
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Amman&appid=b06c50f28e8e5841870067eb25cc00f1&units=metric'
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  fetchWeather();
}, []);

  return (
    <div className="app-container">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaxvT42O2ZH_eMPa_34ovHTWepcLeDJz-mw&s"
          alt="HTU Logo"
        />
        <div className="weather">
        {weather ? (
          <>
            <div>🌤 {weather.weather[0].main}</div>
            <div>{Math.round(weather.main.temp)}°C in Amman</div>
          </>
         ) : (
          <div>Loading weather...</div>
        )}
        </div>
      </header>

      <div className="main-content">
        <div className="book-appointment">
          <h2 className="section-title">
            {appointmentToEdit ? 'Update' : 'Book'} Appointment
          </h2>
          <AppointmentForm
            api={api}
            onAppointmentSaved={handleSaved}
            appointmentToEdit={appointmentToEdit}
            clearEdit={clearEdit}
          />
        </div>

        <div className="all-appointments">
          <h2 className="section-title">All Appointments</h2>
          <AppointmentList
            api={api}
            refresh={refresh}
            onEdit={handleEdit}
          />
        </div>
      </div>

      <footer>
        <div className="footer-info">
          <div>
              <i className="fa fa-map-marker" /> KHBP, Building 17, Amman - Jordan
          </div>
          <div>
            <i className="fa fa-phone" /> +962 6 580 8787
          </div>
          <div>
            <i className="fa fa-envelope" /> <a href="mailto:info@htu.edu.jo">info@htu.edu.jo</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
