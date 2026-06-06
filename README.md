# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer is a Node.js and Express.js backend application that fetches public GitHub profile data using the GitHub API, stores profile insights in a MySQL database, and exposes REST APIs to retrieve analyzed profiles.

## Features

* Fetch GitHub user profile data
* Store profile information in MySQL
* Update existing profiles automatically
* Retrieve all analyzed profiles
* Retrieve a specific profile by username
* RESTful API architecture
* Layered architecture using Controller, Service, and Repository pattern

## Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* GitHub REST API

## Project Structure

src/
├── config/
├── controller/
├── repositories/
├── routes/
├── services/
└── server.js

## Installation

1. Clone the repository

git clone <repository-url>

2. Install dependencies

npm install

3. Create a .env file

```env``
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=github_analyzer

4. Start the application

npm run dev

## API Endpoints

### Analyze and Save Profile

POST /api/profiles/:username

Example:

POST /api/profiles/octocat

### Get All Profiles

GET /api/profiles

### Get Single Profile

GET /api/profiles/:username

## Live Deployment

https://github-profile-analyzer-epau.onrender.com

## Database Schema

See schema.sql for database structure.
