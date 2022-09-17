DROP DATABASE IF EXISTS sample_blog_db;

CREATE DATABASE sample_blog_db;

USE sample_blog_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    username VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    content TEXT,
    author_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);