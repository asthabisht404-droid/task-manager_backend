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
