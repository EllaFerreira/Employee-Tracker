const express = require("express");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connectingDb = require("./config/connection");

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

