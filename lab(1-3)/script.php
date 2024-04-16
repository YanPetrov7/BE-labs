<?php

$servername = "127.0.0.1";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully\n";

$dbname = "example_database";

$query = "CREATE DATABASE $dbname";

$result = $conn->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$dbname'");

if ($result->num_rows > 0) {
  echo "Database '$dbname' already exists\n";
} else {
  $query = "CREATE DATABASE $dbname";
  if ($conn->query($query) === TRUE) {
    echo "Database created successfully\n";
  } else {
    echo "Error creating database: " . $conn->error . "\n";
  }
}

$conn->close();
