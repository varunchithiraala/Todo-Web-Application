# Todo App API

## Overview
The Todo App API is a RESTful web service designed for managing user accounts and todo items. It provides endpoints for user registration, authentication, and CRUD operations for todos, all backed by a SQLite database.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features
- User registration and login
- Secure password storage using bcrypt
- JWT-based authentication
- CRUD operations for todos
- SQLite database for data storage

## Technologies Used
- Node.js
- Express.js
- SQLite3
- JWT (JSON Web Tokens)
- Bcrypt.js

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-app-api.git
   cd todo-app-api
2. Install the dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and set the following variables:
   ```makefile
   JWT_SECRET=your_jwt_secret
   PORT=5000
4. Initialize the SQLite database:
   ```bash
   npm run init-db

## Usage
1. To start the server, run the following command:
    ```bash
    npm start
2. The server will run on http://localhost:5000.

## API Endpoints

### Authentication
- **POST** `/api/auth/signup`  
  Register a new user.

- **POST** `/api/auth/login`  
  Authenticate user and return a JWT token.

### User Profile
- **GET** `/api/profile`  
  Retrieve user profile (requires JWT token).

- **PUT** `/api/profile`  
  Update user profile (requires JWT token).

### Todos
- **POST** `/api/todos`  
  Create a new todo (requires JWT token).

- **GET** `/api/todos`  
  Retrieve all todos for the authenticated user (requires JWT token).

- **PUT** `/api/todos/:id`  
  Update a todo by ID (requires JWT token).

- **DELETE** `/api/todos/:id`  
  Delete a todo by ID (requires JWT token).

## Database Structure

### Users Table
- **id**: TEXT PRIMARY KEY
- **name**: TEXT NOT NULL
- **email**: TEXT NOT NULL UNIQUE
- **password**: TEXT NOT NULL

### Todos Table
- **id**: TEXT PRIMARY KEY
- **user_id**: TEXT
- **title**: TEXT NOT NULL
- **description**: TEXT
- **status**: TEXT NOT NULL

## Environment Variables
Make sure to set the following environment variables in your `.env` file:

- **JWT_SECRET**: Secret key used for signing JWT tokens.
- **PORT**: The port on which the server runs.
