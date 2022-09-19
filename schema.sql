DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    PRIMARY KEY (dept_id),
    dept_id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    PRIMARY KEY (role_id),
    role_id INT NOT NULL AUTO_INCREMENT,
    role_title VARCHAR(30) NOT NULL,
    role_salary INT NOT NULL,
    foreign_department_id INT NOT NULL,
    FOREIGN KEY (foreign_department_id)
        REFERENCES departments (dept_id)
);

CREATE TABLE employee (
    PRIMARY KEY (emp_id),
    emp_id INT NOT NULL AUTO_INCREMENT,
    emp_first_name VARCHAR(30) NOT NULL,
    emp_last_name VARCHAR(30) NOT NULL,
    emp_role_id INT NOT NULL
);