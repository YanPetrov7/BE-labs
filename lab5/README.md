# NestJS MongoDB REST API

This project is a RESTful API developed with NestJS and MongoDB. It demonstrates how to create, read, update, and delete (CRUD) entries in a MongoDB database using the powerful features of NestJS.

## Features

- CRUD operations
- MongoDB integration with Mongoose
- Validation and error handling
- Environment-based configuration

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.x or higher recommended)
- **NPM**
- **MongoDB** (local or remote instance)

## Installation and Setup

After cloning the repository and creating db, follow these steps to set up and run the project on your local machine:

1. **Move to the project directory**

```bash
cd lab5
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**

Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
MONGO_USER=username
MONGO_PW=password
MONGO_URL=db_url
MONGO_DB_NAME=db_name
```

4. **Start the Application**

To start the application, run the following command:

```bash
npm run start
```

The server will start on `http://localhost:3000`. You can now make requests to the API using tools like Postman or cURL.
