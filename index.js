const mysql = require('mysql2');
const inquirer = require("inquirer"); 


const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    // Your username
    user: "root",

  
    // Your password
    password: "Sam1sar1.",
    database: "companyBud_db"
});

connection.connect(function(err) {
    //console.log('Working!')
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
            console.log(choice)
            
            switch (choice.startMenu) {
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

function departmentsView() {
    var query = `select name from department;`;
    //console.log("working");
    connection.query(query, function(err, res) {
        if (err) throw err; 
        // console.log('working');
        console.table(res);
       runProgram();
    });
};

function employeesView() {
    var query = `select * from employee;`;
    connection.query(query, function(err, res){
        if (err) throw err; 
        console.table(res);
        runProgram();
    });
};

function rolesView() {
    var query = `select * from empRole;`;
    connection.query(query, function(err, res){
        if (err) throw err; 
        console.table(res);
        runProgram();
    });    
};

//  function addDepartment() {
//     var query =`INSERT INTO department (name) VALUES (?);`
//     inquirer
//         .prompt({
//             name: "addDepartment",
//             type: "input",
//             message: "What is the name of the department?"
//         })
//         .then(function(choice){
//             const params = [
//                    addDepartment: choice.addDepartment 
//                 ];
//             //console.log(departmentName); 
//             connection.query("INSERT INTO department (name) VALUES (?)", params (err, res) => {
//             })

//         });
//  }; 
