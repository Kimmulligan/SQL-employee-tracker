// array of questions for user
const inquirer = require("inquirer");
const connection = require("./connection");
const util = require("util");
require("console.table");
connection.query = util.promisify(connection.query);
const employeeQuestions = [
  {
    type: "input",
    name: "firstName",
    message: "What is your employee's first name?",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is your employee's last name?",
  },
  {
    type: "input",
    name: "role",
    message: "What is your employee's role id?",
  },
  {
    type: "input",
    name: "manager",
    message: "What is your employee manager's id?",
  },
];
const startingQuestion = {
  type: "list",
  name: "start",
  message: "What do you want to do?",
  choices: [
    "view all departments",
    "view all roles",
    "view all employees",
    "add a department",
    "add a role",
    "add an employee",
    "update an employee role",
  ],
};
const addDepartment = [
  {
    type: "input",
    name: "department",
    message: "What is your employee's new department name?",
  },
];
const addRole = [
  {
    type: "input",
    name: "role",
    message: "What is your employee's new role?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is your employee's salary?",
  },
  {
    type: "input",
    name: "department_id",
    message: "What is your employee's department id?",
  },
];
const updateEmployee = [
  {
    type: "number",
    name: "employeeId",
    message: "What is your employee's ID?",
  },
  {
    type: "number",
    name: "roleId",
    message: "What is your employee's Role ID?",
  },
];
// function to initialize program
async function init() {
  const response = await inquirer.prompt(
    
 startingQuestion  

  );
  if (response.start === "view all departments") {
    const result = await connection.query(
      `SELECT * FROM department`,
      function (err, res) {
        if (err) throw err;
        console.table(res);
        // Call updateProduct() AFTER the INSERT completes
        init();
      }
    );
  } else if (response.start === "view all roles") {
    const result = await connection.query(
      `SELECT role.title, role.salary, department.deptName
      FROM role 
      INNER JOIN department 
      ON role.department_id = department.id`,
    //make else if and sql for joining 3 tables

      function (err, res) {
        if (err) throw err;
        console.table(res);
        // Call updateProduct() AFTER the INSERT completes
        init();
      }
    );
  } else if (response.start === "add a role") {
    const response = await inquirer.prompt(addRole);
    console.log(response);
    const result = await connection.query(
      `insert into role (title, salary, department_id) values (?,?,?)`,
      [response.role, Number(response.salary), Number(response.department_id)],
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " role inserted!\n");
        // Call updateProduct() AFTER the INSERT completes
        init();
      }
    );
  } else if (response.start === "add a department") {
    const response = await inquirer.prompt(addDepartment);
    console.log(response);
    const result = await connection.query(
      `insert into department (deptName) values (?)`, [response.department],
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " department inserted!\n");
        // Call updateProduct() AFTER the INSERT completes
        init();
      }
    );
  } else if (response.start === "update an employee role") {
    const response = await inquirer.prompt(updateEmployee);
    console.log(response);
    const result = await connection.query(
      "UPDATE employee SET ? WHERE ?",
      [{ role_id: response.roleId }, { id: response.employeeId }],
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employee updated!\n");
        // Call updateProduct() AFTER the INSERT completes
        init();
      }
    );
    console.log(result);
  } else if (response.start === "add an employee") {
    const response = await inquirer.prompt(employeeQuestions);
    console.log(response);
    const result = await connection.query(
      `insert into employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)`,
      [response.firstName, response.lastName, response.role, response.manager],
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " employee inserted!\n");
        // Call updateProduct() AFTER the INSERT completes
        init();
      }
    );
    console.log(result);
  }
  else if (response.start === "view all employees") {
    const result = await connection.query(
      `SELECT * FROM employee`,
    //make else if and sql for joining 3 tables

      function (err, res) {
        if (err) throw err;
        console.table(res);
        // Call updateProduct() AFTER the INSERT completes
        init();
      }
    );
  }
}
connection.connect(function (err) {
  if (!err) {
    init();
  }
});
// return html

// // function call to initialize program
