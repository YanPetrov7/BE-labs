# PHP Laravel Project

This is a PHP Laravel project designed to demonstrate various back-end functionalities using Laravel framework and a MySQL database via XAMPP. Below, you will find instructions on how to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   **PHP** (version 7.3 or higher)
-   **Composer** - Dependency Manager for PHP
-   **Laravel** - PHP Framework
-   **XAMPP** - To manage MySQL databases

## Installation

After cloning the repository and creating db follow these steps to set up and run the project on your local machine:

1. **Move to the project directory**

```bash
cd lab(1-3)
```

2. **Install Dependencies**

Run Composer to install the necessary PHP packages:

```bash
composer install
```

3. **Set Up Environment File**
   Copy the `.env.example` file to create a `.env` file which will store your environment variables:

```bash
cp .env.example .env
```

The most important variables to set are the database connection details:

```.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

5. **Run the Migrations**

Ensure that your XAMPP MySQL service is running and then execute the following command to create the database tables:

```bash
php artisan migrate
```

6. **Start the Development Server**

You can start the Laravel development server by running:

```bash
php artisan serve
```

This will usually host your application on `http://localhost:8000`. You can access your application through this URL in your web browser.
