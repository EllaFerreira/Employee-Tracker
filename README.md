# Employee-Tracker 👣 🔍

![license](https://img.shields.io/github/license/EllaFerreira/Note-Taker)
![Inquirer](https://img.shields.io/badge/Package-Inquirer-red.svg)
![MySQL](https://img.shields.io/badge/AppWith-MySQL-purple.svg)
![Nodejs](https://img.shields.io/badge/AppWith-NodeJS-blue.svg)
![JavaScript](https://img.shields.io/badge/AppWith-ExpressJS-yellow.svg)

## About this Project

As a developer frequently we have to create interfaces that allows non-developers to easily interact with information stored in databases.

In this project I used MySQL as datasabe and Inquirer npm package to be able to interact with the user via command-line, and the console.table npm package to print MySQL rows to the console.

## Mock up

![mockup]()

## Content

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Sources](#sources)
- [Project Creator](#project-creator)

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Technologies

- Node/Express js - backend;
- JavaScript;
- File System;
- Console.table npm package;
- Mysql2 npm package;
- Inquirer npm package;

## Sources

- [Express](https://expressjs.com/en/starter/hello-world.html)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Asciiart-logo](https://www.npmjs.com/package/asciiart-logo)

## Project Creator

[EllaFerreira](https://github.com/EllaFerreira)

© 2021 Team Profile Generator. All rights reserved
