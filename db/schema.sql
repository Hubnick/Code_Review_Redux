DROP DATABASE IF EXISTS review_db;
CREATE DATABASE review_db;

USE review_db;
CREATE TABLE users (
user_id INTEGER AUTO_INCREMENT NOT NULL,
user_name VARCHAR (20) NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR (60) NOT NULL,
Primary Key (user_id)
);
