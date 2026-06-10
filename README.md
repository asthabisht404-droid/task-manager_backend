# Task Manager API

The brain behind your productivity – a fast, secure Node.js backend that keeps your tasks organized and your data safe.

## What is this?

A RESTful API built with Express and MongoDB that powers the task manager frontend. Think of it as your personal task vault: it handles user accounts, stores your todos securely, and serves them up instantly whenever you need them. No fluff, just clean endpoints that make getting things done feel effortless.

The API focuses on simplicity and security. User passwords are safely hashed, access is controlled with JWT tokens, and everything talks to MongoDB with Mongoose to keep your data neat and organized.

## Key Features

- **User authentication** – Secure registration and login with password hashing
- **JWT protection** – Protected routes keep your tasks private
- **Task CRUD** – Full create, read, update, delete operations on tasks
- **MongoDB integration** – Reliable data storage with automatic timestamps
- **Error handling** – Graceful error responses that help debug issues

## Tech Stack

- **Node.js** – JavaScript runtime for server-side magic
- **Express** – Fast, unopinionated web framework
- **MongoDB** – Flexible NoSQL database
- **Mongoose** – Elegant MongoDB object modeling
- **JWT** – Secure token-based authentication
- **bcryptjs** – Password hashing made simple

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm
- MongoDB database (Atlas or local instance)



📸 Screenshots
🔐 Login Page

https://github.com/user-attachments/assets/403662c4-56eb-460e-b617-b66152fdd9b8

📝 Registration Page

https://github.com/user-attachments/assets/c7383103-3082-46be-a617-420d22b2a26d

📊 Dashboard

https://github.com/user-attachments/assets/cae49a37-ed03-49c3-8860-101645fcd047

🔍 Task Status & Search

https://github.com/user-attachments/assets/146d3600-5f77-48a0-a3f2-b49c3a49635a

✏️ Update Tasks

https://github.com/user-attachments/assets/0c9e7b94-be71-4846-bd33-fe1381baf02e

🗑️ Delete Tasks

https://github.com/user-attachments/assets/96a8c955-3fb1-482c-8040-7fa73e4477b3

✅ Complete Tasks

https://github.com/user-attachments/assets/c9e5f3e7-c369-43a6-9dc0-ab721e47be24

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api

# Install dependencies
npm install

# Create .env file
cp .env.example .env  # or create manually with:PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
JWT_SECRET=your_super_secret_jwt_key_here


# Development mode (with auto-restart)
npm run dev

# Production mode
npm start



Server will start at http://localhost:5000


