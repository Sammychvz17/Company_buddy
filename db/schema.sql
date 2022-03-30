DROP DATABASE IF EXISTS companyBud_db;
CREATE database companyBud_db;

USE companyBud_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL
    );

CREATE TABLE empRole  (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    title  VARCHAR(30) NOT NULL, 
    salary DECIMAL, 
    department_id INT NOT NULL, 
    FOREIGN KEY (department_id) REFERENCES department(id)
    
);

create table employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT, 
    manager_id INT,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    FOREIGN KEY (role_id) REFERENCES empRole(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
