# 🍔 FoodieHub - Full Stack Food Delivery Platform

> A production-ready food ordering web application built with the MERN Stack, featuring secure authentication, online payments, cart management, and an admin dashboard.

![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Stripe](https://img.shields.io/badge/Stripe-Payments-purple)
![License](https://img.shields.io/badge/License-MIT-orange)

---

## 📌 Project Overview

FoodieHub is a full-stack food delivery platform that enables customers to browse food items, place orders, make secure online payments, and track order status in real time.

The platform also includes an Admin Dashboard for managing food items, customer orders, and delivery status.

This project demonstrates real-world software development concepts including:

- Authentication & Authorization
- REST API Development
- Payment Gateway Integration
- Database Management
- State Management
- Full Stack Deployment
- CRUD Operations
- Responsive UI Design

---

## 🚀 Live Features

### 👤 User Side

✅ Create Account & Login

✅ Browse Food Menu

✅ Search & Explore Food Items

✅ Add/Remove Items from Cart

✅ Secure Checkout Process

✅ Stripe Payment Integration

✅ Place Orders

✅ Track Order Status

✅ Responsive Design

---

### 🔑 Admin Side

✅ Admin Dashboard

✅ Add New Food Items

✅ Update Menu

✅ Delete Food Items

✅ View Customer Orders

✅ Update Order Status

✅ Manage Platform Data

---

## 🏗️ System Architecture

```text
React Frontend
       │
       ▼
Express REST API
       │
       ▼
Node.js Backend
       │
       ▼
MongoDB Database
       │
       ▼
Stripe Payment Gateway
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS3
- Vite

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT Authentication
- Bcrypt Password Hashing

### Payments

- Stripe Payment Gateway

### Tools & Platforms

- Git & GitHub
- Postman
- MongoDB Atlas
- VS Code

---

## ✨ Key Technical Highlights

### Authentication System

- JWT-based authentication
- Password encryption using bcrypt
- Protected routes
- User session management

### Payment Processing

- Secure Stripe checkout integration
- Payment verification
- Order confirmation workflow

### Database Design

- User Management
- Food Catalog
- Cart Management
- Order Tracking

### API Development

- RESTful API Architecture
- Error Handling Middleware
- Modular Route Structure
- MVC Pattern

---

## 📂 Folder Structure

```bash
FoodieHub/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   └── config/
│
├── admin/
│   ├── src/
│   ├── pages/
│   └── components/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/foodiehub.git
cd foodiehub
```

### Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

#### Admin Panel

```bash
cd admin
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key

FRONTEND_URL=http://localhost:5173
```

---

## ▶️ Running the Project

### Backend Server

```bash
npm run server
```

### Frontend

```bash
npm run dev
```

### Admin Dashboard

```bash
npm run dev
```

---

## 📸 Project Screenshots

### Home Page

(Add Screenshot)

### Food Menu

(Add Screenshot)

### Cart Page

(Add Screenshot)

### Payment Page

(Add Screenshot)

### Admin Dashboard

(Add Screenshot)

---

## 🔗 REST API Endpoints

### User

```http
POST /api/user/register
POST /api/user/login
```

### Food

```http
GET    /api/food/list
POST   /api/food/add
DELETE /api/food/remove
```

### Cart

```http
POST /api/cart/add
POST /api/cart/remove
GET  /api/cart/get
```

### Orders

```http
POST /api/order/place
POST /api/order/verify
GET  /api/order/list
POST /api/order/status
```

---

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience in:

- Building scalable MERN applications
- Implementing JWT authentication
- Integrating Stripe payment gateway
- Designing RESTful APIs
- Managing MongoDB databases
- Creating responsive user interfaces
- Full Stack project architecture

---

## 📈 Future Enhancements

- Google Authentication
- Email Notifications
- Real-Time Order Tracking
- Coupon System
- AI-Based Food Recommendations
- Progressive Web App (PWA)

---

## 👨‍💻 Developer

**Your Name**

Final Year B.Tech Student | Full Stack Developer

Skills:
`React.js` `Node.js` `Express.js` `MongoDB` `JavaScript` `REST APIs`

LinkedIn: Your LinkedIn URL

GitHub: Your GitHub URL

---

### ⭐ If you like this project, consider giving it a star on GitHub!
