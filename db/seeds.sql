INSERT INTO
department (name)
VALUES
('Technology'),
('DevOps'),
('Marketing'),
('Sales'),
('Finance'),
('Management');
SELECT 
*
FROM
department;
INSERT INTO
role(title, salary, department_id)
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
employee(first_name, last_name, role_id, manager_id)
VALUES
('Carol', 'Smith', 1, NULL),
('Ella', 'Ferreira', 2, NULL),
('Zahra', 'Willians', 3, 1),
('Brett', 'Clark', 4, NULL),
('Zoe', 'Martinse', 5, NULL),
('Claire', 'Beatrice', 6, 3),
('Stela', 'Morato', 7, 5),
('Pedro', 'Leugh', 8, NULL),
('Ander', 'Noguez', 9, NULL);
