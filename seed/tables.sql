INSERT INTO department (deptName) VALUES ("Marketing");
INSERT INTO department (deptName) VALUES ("Human Resources");
INSERT INTO department (deptName) VALUES ("Sales");
INSERT INTO department (deptName) VALUES ("Accounting");

INSERT INTO role (title, salary, department_id) VALUES ("Marketing Executive", 90000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Marketing Assistant", 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Human Resources", 60000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 70000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Accountant", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("dsfasdf", "sdfda", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("dssdfsd", "sdfdscda", 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("df", "sdfdfwa", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("dsfaswfdf", "wwsdfda", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("dasdf", "sdfdaww", 4, 2);
