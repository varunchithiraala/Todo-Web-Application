# Todo Management Application

A React-based Todo Management Application that allows users to manage their profiles and todo items efficiently. Users can create, update, and delete todos, as well as edit their profile information securely.

## Features

- User Authentication (Signup, Login, Logout)
- Profile Management (Edit Profile)
- Todo List Management (Create, Read, Update, Delete)
- Password visibility toggle in profile edit
- Responsive UI

## Technologies Used

- React.js
- React Router
- Axios for API calls
- CSS for styling
- JSON Web Tokens (JWT) for authentication
- Express.js (backend not included in this repository)

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (Node package manager)
- MongoDB (or any other database for backend)
- An API backend running at `http://localhost:5000` for authentication and data management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-management-app.git
   cd todo-management-app
2. Install the dependencies:
   ```bash
   npm install
3. Start the application:
   ```bash
   npm start
4. Open your browser and navigate to http://localhost:3000.

## Component Overview

### Profile Management
- **ProfileCard.js**: Displays user profile information with an option to edit.
- **EditProfileCard.js**: Allows users to edit their name, email, and password. Includes password visibility toggle.

### Todo Management
- **TodoList.js**: Main component for displaying and managing todos.
- **TodoItem.js**: Represents each todo item, with options to edit and delete.

### Authentication
- **Login.js**: User login functionality.
- **Signup.js**: User registration functionality.

### Routing
- **PrivateRoute.js**: Protects routes that require authentication, redirecting unauthenticated users to the login page.

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
