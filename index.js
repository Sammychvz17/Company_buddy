const inquirer = require("inquirer"); 
const ctable = require("console.table");
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Sam1sar1.",
    database: "companyBud_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runProgram();
});

function runProgram() {
    inquirer
        .prompt({
            name: "startMenu",
            type: "list", 
            message: "What would you like to do?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
            ],
        })
        .then(function(choice) {
            switch (choice.action) {
                case "View All Departments":
                    departmentsView();
                    break;
                case "View All Employees":
                        employeesView();
                        break;    
                case "View All Roles":
                    rolesView();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                     break;
            }
        });
};

runProgram();


