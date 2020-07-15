-- Drop db if exists, creates a new db, then selects db
DROP DATABASE IF EXISTS carservice_db;
CREATE DATABASE carservice_db;
USE carservice_db;

CREATE TABLE users (
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    phone_number VARCHAR(30),
    address VARCHAR(30),
    city VARCHAR(30),
    state VARCHAR(30),
    zip INTEGER
)

--Test seed
INSERT INTO Users
(username, email, password, first_name, last_name, phone_number, address, city, state, zip)
VALUES
("first", "first@gmail.com", "password", "John", "Doe", "330-983-4444", "123 first st", "Akron", "Ohio", "44212");