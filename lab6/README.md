# NestJS MongoDB GraphQL API

This project implements a GraphQL API using the NestJS framework, integrated with MongoDB for data persistence. It demonstrates how to build efficient, scalable APIs with GraphQL and NestJS, providing a robust backend solution for web applications. 

## Features

- GraphQL API implementation
- MongoDB integration using Mongoose
- Comprehensive resolver and schema definitions
- Query, Mutation, and Subscription support
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
cd lab6
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

Once the services are up, you can access the GraphQL API playground at: `http://localhost:3000/graphql`
