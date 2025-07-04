# User Management API

A core API for managing user accounts, including registration, login, profile updates, and role-based access.

## Features

- **User Signup:** Register new users with hashed passwords.
- **Login:** Authenticate users and issue JWT tokens.
- **Password Reset:** Allow users to reset their passwords securely.
- **Profile View/Edit:** Users can view and update their profile information.
- **Route Protection:** Secure endpoints using JWT authentication.
- **Input Validation:** Basic validation for user input.

## Tech Stack

- **Node.js** with **Express**
- **MySQL** (via Sequelize ORM)
- **JWT** for authentication
- **bcryptjs** for password hashing

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MySQL server

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd user_management_api
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=user_management
     JWT_SECRET=your_jwt_secret
     ```
   - Adjust values as needed for your setup.

4. **Set up the database:**
   - Create the database and user table using the SQL below.

### Example SQL Schema

```sql
CREATE DATABASE IF NOT EXISTS user_management;
USE user_management;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Running the API

- **Development mode (with auto-reload):**
  ```bash
  npm run dev
  ```
- **Production mode:**
  ```bash
  npm start
  ```

## API Endpoints

| Method | Endpoint         | Description                | Auth Required |
|--------|------------------|---------------------------|--------------|
| POST   | /api/signup      | Register a new user       | No           |
| POST   | /api/login       | Login and get JWT         | No           |
| POST   | /api/reset       | Request password reset    | No           |
| GET    | /api/profile     | Get user profile          | Yes          |
| PUT    | /api/profile     | Update user profile       | Yes          |

## Security Concepts

- **Password Hashing:** User passwords are hashed using bcryptjs before storage.
- **JWT Authentication:** Secure routes require a valid JWT token.
- **Input Validation:** Basic validation is applied to user input.

## License

ISC

