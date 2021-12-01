INSERT INTO
departments (name)
VALUES
('Engineering'),
('DevOps'),
('Marketing'),
('Sales'),
('Finance'),
('Management');
SELECT 
*
FROM
departments;
INSERT INTO
roles(role_title, role_salary, department_id)
VALUES
('Software Engineer', 150000, 1),
('Full Stack Developer', 120000, 1),
('DevOps Engineer', 160000, 2),
('Brand Manager', 75000, 3),
('Marketing Assistant', 45000, 3),
('Sales Manager', 60000, 4),
('Payroll Office', 45000, 5),
('Account Manager', 60000, 5),
('CEO', 120000, 6);
INSERT INTO
employees(first_name, last_name, role_id, manager_id)
VALUES
('Carol', 'Smith', 5, NULL),
('Ella', 'Ferreira', 1, NULL),
('Zahra', 'Willians', 1, 1),
('Brett', 'Clark', 2, NULL),
('Zoe', 'Martinse', 3, NULL),
('Claire', 'Beatrice', 3, 3),
('Stela', 'Morato', 5, 5),
('Pedro', 'Leugh', 6, NULL),
('Ander', 'Noguez', 4, NULL);
