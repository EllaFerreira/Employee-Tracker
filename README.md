# Employee-Tracker 👣 🔍 👀

![license](https://img.shields.io/github/license/EllaFerreira/Note-Taker)
![Inquirer](https://img.shields.io/badge/Package-Inquirer-red.svg)
![MySQL](https://img.shields.io/badge/AppWith-MySQL-purple.svg)
![Nodejs](https://img.shields.io/badge/AppWith-NodeJS-blue.svg)
![Express](https://img.shields.io/badge/AppWith-ExpressJS-yellow.svg)

## About this Project

As a developer frequently we have to create interfaces that allows non-developers to easily interact with information stored in databases.

In this project I used MySQL as datasabe and Inquirer npm package to be able to interact with the user via command-line, and the console.table npm package to print MySQL rows to the console.
Also used Node js and Express to interact with the db.

## Mock up

![mockup](https://media.giphy.com/media/CP98NRnWNOxbCjS2oc/giphy.gif)

[walkthrough video](https://drive.google.com/file/d/1iBX5ONexHcq2trFfi10x8rKnJr8qwIFI/view?usp=sharing)

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
- Inquirer npm package;
- dotenv;
- Console.table npm package;
- Mysql2 npm package;
- Asciiart-logo;

## Installation

If you want to run this locally on your machine:

- `Clone` to your local machine from this repo.
- Open the repo in your code editor (vs code for example)
- Open with F12 the command-line.
- Run `npm install` on the terminal to install the packages, when it's done,
- Run `mysql -u root -p` to connect to the database,
- Also using the command-line now run `SOURCE db/schema.sql` to create the tables,
- After you create the tables you have to populate it run `SOURCE db/seeds.sql`
- Finally run `node server` to run the node application.
- You will see the 'Employee Tracker' screen and also the options such as:

**View all departments, View all roles, View all employees, Create new department, Create new role, Create new employee and update.**

## Sources

- [Express](https://expressjs.com/en/starter/hello-world.html)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Asciiart-logo](https://www.npmjs.com/package/asciiart-logo)

## Project Creator

[EllaFerreira](https://github.com/EllaFerreira)

© 2021 Team Profile Generator. All rights reserved
