# Backend Labs

## Overview:

This repository contains the backend labs for the course `Back-end Development`. The labs are developed using PHP Laravel and NestJS. The labs are divided into two parts, the first part consists of labs 1-3 developed with PHP Laravel, and the second part consists of labs 4-6 developed with NestJS.

## Labs Overview:

- **Lab 1-3**: Developed with PHP Laravel, interacting with MySQL db.
- **Lab 4**: Developed with NestJS, interacting with the OpenWeatherMap API.
- **Lab 5-6**: Developed with NestJS, interacting with the shared MongoDB.

## Installation:

1. **Clone the Repository**:
```bash
  git clone git@github.com:YanPetrov7/BE-labs.git
```

2. **Navigate to the Project Directory**:
```bash
  cd BE-labs
```

3. **Navigate to the Desired Lab Directory**:
```bash
  cd lab_dir
```

4. Follow the instructions in the README.md file of the lab directory.

## Docker Setup

In labs 5 and 6, you can use Docker to set up the MongoDB database. To do this, follow these steps:

1. Install [Docker](https://docs.docker.com/engine/install/) on your system.

2. **Set Up Environment Variables**:

Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
MONGO_USER=username
MONGO_PW=password
MONGO_DOCKER_URL=mongodb_url_in_docker_network
```

3. Run the following command to start the MongoDB and Mongo Express containers:

```bash
docker-compose up
```
