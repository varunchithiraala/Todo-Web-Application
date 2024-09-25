# Todo Web Application

## Overview
This application is a full-stack Todo management system that allows users to create, read, update, and delete todos. It includes user authentication and profile management functionalities.

## Table of Contents
- [Frontend](#frontend)
- [Backend](#backend)
- [Component Overview](#component-overview)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Frontend
The frontend is built with React.js. It manages user interactions and displays data from the backend API.

### Components
#### Profile Management
- **ProfileCard.js**: Displays user profile information with an option to edit.
- **EditProfileCard.js**: Allows users to edit their name, email, and password. Includes password visibility toggle.

#### Todo Management
- **TodoList.js**: Main component for displaying and managing todos.
- **TodoItem.js**: Represents each todo item, with options to edit and delete.

#### Authentication
- **Login.js**: User login functionality.
- **Signup.js**: User registration functionality.

#### Routing
- **PrivateRoute.js**: Protects routes that require authentication, redirecting unauthenticated users to the login page.

## Backend
The backend is built with Node.js and Express, serving as the API for the frontend. It handles authentication, user profiles, and todo management.

## Component Overview
### Frontend Components
- **ProfileCard.js**: Displays user profile information with an option to edit.
- **EditProfileCard.js**: Allows users to edit their name, email, and password. Includes password visibility toggle.
- **TodoList.js**: Main component for displaying and managing todos.
- **TodoItem.js**: Represents each todo item, with options to edit and delete.
- **Login.js**: User login functionality.
- **Signup.js**: User registration functionality.
- **PrivateRoute.js**: Protects routes that require authentication.

## API Integration
The application interacts with an API hosted at `http://localhost:5000/api/`. Ensure your backend is running to enable full functionality. The following endpoints are used:

### Auth
- `POST /auth/signup`: User registration.
- `POST /auth/login`: User authentication.

### Profile
- `GET /profile`: Fetch user profile.
- `PUT /profile`: Update user profile.

### Todos
- `GET /todos`: Fetch all todos.
- `POST /todos`: Create a new todo.
- `PUT /todos/:id`: Update a todo.
- `DELETE /todos/:id`: Delete a todo.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have improvements or suggestions.
