DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS empRole;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER PRIMARY KEY, 
    name VARCHAR(30) NOT NULL);

CREATE TABLE empRole  (
    id INTEGER PRIMARY KEY, 
    title  VARCHAR(30) NOT NULL, 
    salary DECIMAL, 
    department_id INT);

create table employee (
    id INT PRIMARY KEY, 
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT, 
    manager_id INT);
