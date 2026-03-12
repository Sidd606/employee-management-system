# Employee Management System

A **Full Stack Employee Management System** built using **React (Frontend)** and **Spring Boot (Backend)**.
This application allows users to manage employees by performing **Create, Read, Update, and Delete (CRUD)** operations.

---

## 🚀 Features

* Add new employees
* View list of employees
* Update employee details
* Delete employees
* RESTful API integration
* Clean UI built with React

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Spring Boot
* Spring Data JPA
* Maven

### Database

* MySQL

---

## 📂 Project Structure

```
employee-management-system
│
├── ems-frontend        # React frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── ems-backend         # Spring Boot backend
    ├── src
    ├── pom.xml
    └── mvnw
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/Sidd606/employee-management-system.git
cd employee-management-system
```

---

### 2️⃣ Backend Setup (Spring Boot)

Navigate to backend folder:

```
cd ems-backend
```

Run the Spring Boot application:

```
mvn spring-boot:run
```

Backend will start at:

```
http://localhost:8080
```

---

### 3️⃣ Frontend Setup (React)

Navigate to frontend folder:

```
cd ems-frontend
```

Install dependencies:

```
npm install
```

Run the frontend:

```
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | /api/employees      | Get all employees   |
| GET    | /api/employees/{id} | Get employee by ID  |
| POST   | /api/employees      | Create new employee |
| PUT    | /api/employees/{id} | Update employee     |
| DELETE | /api/employees/{id} | Delete employee     |

---

## 📸 Screenshots

You can add screenshots of the application UI here.

Example:

* Employee List Page
* Add Employee Page
* Update Employee Page

---

## 🎯 Future Improvements

* Authentication (Login / Signup)
* Role-based access
* Pagination
* Search & filtering
* Deploy application online

---

## 👨‍💻 Author

**Siddhant Dhonme**

GitHub:
https://github.com/Sidd606

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
