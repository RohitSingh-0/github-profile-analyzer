# GitHub Profile Analyzer API 🚀

A backend application built with Node.js, Express.js, and MySQL that analyzes public GitHub profiles using the GitHub REST API, stores profile insights in a relational database, and exposes RESTful APIs for retrieving analyzed profile data.

## ✨ Features

* Fetch public GitHub profile data using the GitHub REST API
* Store profile insights in a MySQL database
* Automatically update existing profile records
* Retrieve all analyzed profiles
* Retrieve a specific profile by username
* RESTful API design
* Layered Architecture (Controller → Service → Repository)
* Environment-based configuration using `.env`

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MySQL

### External Services

* GitHub REST API

### Libraries

* Axios
* Dotenv

### Architecture

* Controller Layer
* Service Layer
* Repository Layer

## 📂 Project Structure
src/
├── config/
├── controller/
├── repositories/
├── routes/
├── services/
└── server.js

### Architecture Flow
Client
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
MySQL Database

This separation of concerns makes the application easier to maintain, test, and scale.

## ⚙️ Installation

### 1. Clone the Repository

git clone <repository-url>
cd github-profile-analyzer

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables

Create a `.env` file in the project root:

DB_HOST=localhost
DB_PORT=3306
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=github_analyzer

### 4. Start the Application
npm run dev

## 📡 API Endpoints

### Analyze and Save a GitHub Profile

POST /api/profiles/:username

Example:

POST /api/profiles/octocat

### Get All Profiles

GET /api/profiles

### Get Profile by Username
GET /api/profiles/:username

Example:
GET /api/profiles/octocat

## 🗄️ Database Schema

Database structure is available in:
schema.sql

The schema defines tables used to store analyzed GitHub profile information and related metadata.

## 🌐 Live Deployment

https://github-profile-analyzer-epau.onrender.com

## 🎯 Learning Objectives

This project was built to practice and understand:

* REST API Development
* Node.js & Express.js
* MySQL Database Integration
* API Consumption using Axios
* Layered Backend Architecture
* Error Handling
* Environment Configuration
* Backend Project Structure

## 🚀 Future Improvements

* Migrate to TypeScript
* Add Swagger API Documentation
* Implement Docker Support
* Add Redis Caching
* Track Repository Statistics
* Add User Authentication
* Improve Error Logging and Monitoring

## 👨‍💻 Author

Built as part of my backend engineering journey to gain hands-on experience with API integration, database design, and scalable application architecture.
