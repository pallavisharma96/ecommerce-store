CREATE DATABASE IF NOT EXISTS user_db;

USE user_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password) VALUES ('admin', 'password123');
INSERT INTO users (username, password) VALUES ('Pallavi', 'pallavi1996');
INSERT INTO users (username, password) VALUES ('user2', 'user2pass');
INSERT INTO users (username, password) VALUES ('lucky', 'luckypass');
