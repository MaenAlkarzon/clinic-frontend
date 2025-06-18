# HTU Clinic Appointment System – Frontend

This is the **React.js frontend** of the HTU Clinic Appointment System. It allows students to book, update, and delete their clinic appointments through a user-friendly interface.

## 👥 User Requirements

The system is designed for HTU students who need to book clinic appointments. The user can:

- Enter their **first and last name**
- Provide their **student number**
- Choose an **appointment date and time**
- View all upcoming appointments in a table format
- Edit or delete existing appointments

The interface is simple, responsive, and accessible through any modern web browser.

## 🌐 Features

- 🌤 **Weather API** integration (OpenWeather) to show real-time weather in Amman.
- 📆 Book, update, delete appointments with live form.
- 📋 Dynamic appointment list with edit/delete buttons.
- 🎨 Fully responsive UI using CSS.

## 🔧 Tech Stack

- React.js
- Axios (for HTTP requests)
- OpenWeather API
- Custom CSS (Responsive Design)

## 🧩 Folder Structure

```
clinic-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── AppointmentForm.js
│   │   └── AppointmentList.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── stylee.css
├── .env (optional)
├── package.json
└── README.md
```

## 📦 Installation

```
npm start
```

## 🔗 API Connection

All requests are made to the backend at:
```
http://localhost:3001/api/appointments
```

