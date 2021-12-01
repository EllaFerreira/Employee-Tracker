const express = require("express");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connectingDb = require("./config/connection");
const heading = require("asciiart-logo");

// db.query = util.promisify(db.query);

//Arrays
const departArr = () => {
  return db.query("SELECT DISTINT name from departments");
};
const roleArr = () => {
  return db.query("SELECT DISTINT title from roles");
};
const managerArr = () => {
  return db.query(
    'SELECT CONCAT(first_name," ", last_name) as manager_name from employees'
  );
};
const employeeArr = () => {
  return db.query(
    'SELECT CONCAT(first_name," ", last_name) as name from employees'
  );
};

//displaying
const displayAllDepartments = () => {
  console.log("\nAll departments:\n");
  connectingDb
    .query(
      `
    SELECT 
        * 
    FROM 
        departments
    `,
      function (err, results) {
        console.table(results);
        setTimeout(startMenu, 1000);
      }
    )
    .catch((err) => console.log(err));
};

const displayAllRoles = () => {
  console.log("\nAll roles:\n");
  connectingDb
    .query(
      `
    SELECT 
        r.title, 
        r.id as role_id, 
        d.name as departments, 
        salary
    FROM role r
    JOIN departments d ON r.departments_id = d.id`,
      function (err, results) {
        console.table(results);
        setTimeout(startMenu, 1000);
      }
    )
    .catch((err) => console.log(err));
};

const displayAllEmployees = () => {
  console.log("\nAll employees:\n");
  connectingDb
    .query(
      `
      SELECT 
        e.ID as employee_id,
        e.first_name,
        e.last_name,
        r.title as job_title,
        d.name as department,
        salary,
      CONCAT(m.first_name," ",m.last_name) as manager
      FROM 
        employee e 
      JOIN role r ON e.role_id = r.id 
      JOIN departments d ON r.departments_id = d.id 
      LEFT JOIN employee m ON e.manager_id = m.id 
      `,
      function (err, results) {
        console.table(results);
        startMenu();
      }
    )
    .catch((err) => console.log(err));
};

//adding
const addDepartments = async () => {
  const addDepartmentQuestion = [
    {
      type: "input",
      message: "Add a department.".brightCyan,
      name: "departmentName",
    },
  ];
  await inquirer.prompt(addDepartmentQuestion).then(async (data) => {
    await connectingDb
      .query(
        `
            INSERT INTO 
                departments (name) 
            VALUES 
                (?)
            `,
        data.departmentName
      )
      .then((results) => {
        console.log(
          `\nDepartment was successfully added ${data.departmentName}\n`
        );
      });
  });
  setTimeout(startMenu, 1000);
};

async function addRoles() {
  const addRoleQuestions = [
    {
      type: "input",
      message: "Add title role.".brightCyan,
      name: "roleTitle",
    },
    {
      type: "input",
      message: "Add a salary to the new role.".brightCyan,
      name: "salary",
    },
    {
      type: "list",
      message: "Add which department the new role belongs to.".brightCyan,
      name: "departmentName",
      choices: await departmentArr(),
    },
  ];
  inquirer.prompt(addRoleQuestions).then(async (data) => {
    const { roleTitle, departmentName, salary } = data;
    await connectingDb
      .query(
        `
        INSERT INTO 
            role (title,salary,department_id) 
        SELECT 
            ?,
            ?,
            id
        FROM 
            department 
        WHERE 
            name = ?;
        `,
        [roleTitle, salary, departmentName]
      )
      .then((results) =>
        console.log(
          `\nYou have successfully added ${roleTitle} to ${departmentName}\n`
        )
      )
      .catch((err) => console.log(err));
    setTimeout(startMenu, 1000);
  });
}

async function addNewEmployees() {
  let roleArr = await roleArr();
  roleArr = roleArr.map((i) => i.title);
  let managerArr = await managerArr();
  managerArr = managerArr.map((j) => j.manager_name);
  const addNewEmployeesQuestions = [
    {
      type: "input",
      message: "Add the employees first name?".brightCyan,
      name: "firstName",
    },
    {
      type: "input",
      message: "Add the employees last name?".brightCyan,
      name: "lastName",
    },
    {
      type: "list",
      message: "Add the employees role?".brightCyan,
      name: "roleName",
      choices: roleArr,
    },
    {
      type: "list",
      message: "Who is the new employees manager?".brightCyan,
      name: "managerName",
      choices: [...managerArr, "No manager to this role."],
    },
  ];
  inquirer.prompt(addNewEmployeesQuestions).then(async (data) => {
    console.log(data);
    const { firstName, lastName, roleName, managerName } = data;
    var managerId = undefined;
    await connectingDb
      .query(
        'SELECT id FROM employee WHERE CONCAT(first_name," ",last_name) = ?',
        managerName
      )
      .then((results) => {
        if (managerName === "No manager to this role.") {
          return;
        }
        managerId = results[0].id;
      })
      .catch((err) => console.log(err));
    await connectingDb
      .query(
        `
            INSERT INTO 
                employee (first_name,last_name,role_id,manager_id) 
            SELECT 
                ?,
                ?,
                id,
                ? 
            FROM 
                role 
            WHERE 
                title = ?;
            `,
        [firstName, lastName, managerId, roleName]
      )
      .then((results) =>
        console.log(
          `\nIt was Successfully added ${firstName} ${lastName} with manager ${managerName}\n`
        )
      )
      .catch((err) => console.log(err));
    setTimeout(startMenu, 1000);
  });
}

async function updateEmployeeRoles() {
  let employeeArr = await employeeArr();
  let roleArr = await roleArr();
  roleArr = roleArr.map((i) => i.title);
  const updateEmployeeRoleQuestions = [
    {
      type: "list",
      message: "Select the employee which you want to update.".brightCyan,
      name: "employeeName",
      choices: employeeArr,
    },
    {
      type: "list",
      message: "Add the employees new role?".brightCyan,
      name: "roleName",
      choices: roleArr,
    },
  ];
  inquirer.prompt(updateEmployeeRoleQuestions).then(async (data) => {
    const { employeeName, roleName } = data;
    var roleId = undefined;
    await connectingDb
      .query("SELECT id FROM role WHERE title = ?", roleName)
      .then((results) => {
        roleId = results[0].id;
      })
      .catch((err) => console.log(err));
    await connectingDb
      .query(
        `UPDATE employee SET role_id = ? WHERE CONCAT(first_name," ",last_name) = ?`,
        [roleId, employeeName]
      )
      .then((results) => {
        console.log(
          `\nIt was successfuly updated ${employeeName}'s to ${roleName}\n`
        );
      })
      .catch((err) => console.log(err));
    setTimeout(startMenu, 1000);
  });
}

const startMenu = () => {
  const AllQuestions = [
    {
      type: "list",
      message: "What would you like to do?".brightCyan,
      name: "menu",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employees role",
        "Exit",
      ],
    },
  ];

  inquirer
    .prompt(AllQuestions)
    .then((data) => {
      switch (data.menu) {
        case "View all departments":
          displayAllDepartments();
          break;
        case "View all roles":
          displayAllRoles();
          break;
        case "View all employees":
          displayAllEmployees();
          break;
        case "Add a department":
          addDepartments();
          break;
        case "Add a role":
          addRoles();
          break;
        case "Add an employee":
          addNewEmployees();
          break;
        case "Update an employees role":
          updateEmployeeRoles();
          break;
        case "Exit":
          console.log(
            `Disconnected from the employee_db database.`.brightMagenta
          );
          process.exit();
      }
    })
    .catch((err) => console.log(err));
};

function Header() {
  console.log(
    heading({
      name: "Employee Tracker",
      font: "Sweet",
      padding: 3,
      borderColor: "bold-green",
      textColor: "bold-yellow",
    })
      .emptyLine()
      .emptyLine()
      .render()
  );
}

const init = () => {
  Header();
  startMenu();
};

init();
