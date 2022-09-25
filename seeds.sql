USE employee_db;

INSERT INTO departments (dept_name)
    VALUES
        ('Management'),
        ('Senior Software Developer'),
        ('Junior Software Developer'),
        ('Marketing'),
        ('Legal');

INSERT INTO roles (role_title, role_salary, foreign_department_id)
    VALUES
        ('Software Engineer Manager', 150000, 1),
        ('Sr Back End', 120000, 2),
        ('Back End', 80000, 3),
        ('Sr Front End', 120000, 2),
        ('Front End', 80000, 3),
        ('Marketing Intern', 60000, 4),
        ('Marketing Lead', 80000, 4),
        ('IP Lawyer', 130000, 5);

INSERT INTO employee (emp_first_name, emp_last_name, emp_role_id, emp_manager_id)
    VALUES
        ('Gloria', 'Esmee', 4, 1),
        ('Jared', 'Benjamin', 3, 2),
        ('Nathaniel', 'Mona', 5, 1),
        ('Parker', 'Lyda', 3, 2),
        ('Lavina', 'Shelly', 3, 2),
        ('Simone', 'Damon', 2, 1),
        ('Devin', 'Flora', 4, 1),
        ('Tobias', 'Funke', 1, 1),
        ('Dane', 'Murphy', 2, 1);

        