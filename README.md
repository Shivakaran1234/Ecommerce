🛒 MERN Ecommerce Platform

A full-stack ecommerce web application built using the **MERN stack (MongoDB, Express, React, Node.js)** with **Docker containerization and CI/CD support**.

This project demonstrates full-stack development and basic DevOps practices.

---

# 🚀 Features

## 👤 User Features
- User authentication (login/register)
- Product browsing
- Add to cart
- Order management
- Responsive UI

## 🛠 Admin Panel
- Add products
- Manage products
- View orders
- Inventory management

## ⚡ Backend API
- RESTful API
- JWT authentication
- MongoDB database integration
- Product & user management

## 🧑‍💻 DevOps Features
- Docker containerization
- Docker Compose multi-container setup
- GitHub repository integration

---

# 🏗 Project Architecture


User → Frontend → Backend API → MongoDB
↓
Admin Panel


---

# 🧱 Tech Stack

## Frontend
- React.js
- Vite
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## DevOps
- Docker
- Docker Compose
- Git

---

# 📁 Project Structure


Ecommerce/
│
├── frontend/ # Customer UI (React)
├── admin/ # Admin dashboard (React)
├── backend/ # Node.js API
├── docker-compose.yml
└── README.md


---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Shivakaran1234/Ecommerce.git
cd Ecommerce
2️⃣ Environment Variables

Create .env inside backend/:

MONGODB_URI=mongodb://localhost:27017
JWT_SECRET=your_secret
3️⃣ Run with Docker (Recommended)
docker-compose up --build
Access Applications
Frontend → http://localhost:5173
Admin → http://localhost:5174
Backend → http://localhost:5000
MongoDB → 27017
🐳 Docker Services

MongoDB container

Backend API container

Frontend container

Admin panel container

🔐 Authentication

JWT based authentication

Protected API routes

User authorization

🎯 Learning Outcomes

Full-stack MERN development

REST API design

Authentication systems

Docker containerization

Multi-service architecture
