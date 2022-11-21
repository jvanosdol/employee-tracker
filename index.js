
// ****************************************************************************************************
const mysql = require('mysql2');
const utils = require('util');
const inquirer = require('inquirer');
//const { allowedNodeEnvironmentFlags } = require('process');

// ****************************************************************************************************

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password123',
        database: 'employee_db'
    },
);

db.query = utils.promisify(db.query);

// ****************************************************************************************************

const createPost = async () => {
    const departments = await db.query('SELECT * FROM departments')

//     const userChoices = departments.map( department => ({
//         id: department.dept_id,
//         name: department.dept_name
//     }))


// console.log(userChoices)

const answers = await inquirer.prompt([

    {
        message: 'What would you like to do?',
        name: 'main_action',
        type: 'list',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
    },

])
    switch (answers.main_action) {
        case 'View All Departments':
            viewDepartments();
            break;

        case 'View All Roles':
            viewRoles();
            break;
        
        case 'View All Employees':
            viewEmployees();
            break;

        case 'Add a Department':
            addDepartment();
            break;

        case 'Add a Role':
            addRole();
            break;

        case 'Add an Employee':
            addEmployee();
            break;
        
        // case 'Update an Employee Role':
        //     updateEmployeeRole();
        //     break;
    }
};


// DONE ****************************************************************************************************
viewDepartments = async () => {
    const departments = await db.query('SELECT * FROM departments')

    const departmentView = departments.map( department => ({
        id: department.dept_id,
        name: department.dept_name
    }))

    console.table(departments)
    //console.log(departmentView)
};
// DONE ****************************************************************************************************
viewRoles = async () => {
    const roles = await db.query('SELECT * FROM roles')

    const roleView = roles.map( role => ({
        id: role.role_id,
        title: role.role_title,
        salary: role.role_salary
    }))

    console.table(roles)

    //console.log(roleView)
};
// DONE ****************************************************************************************************
viewEmployees = async () => {
    const employees = await db.query('SELECT * FROM employee')

    const employeeView = employees.map( employee => ({
        id: employee.emp_id,
        first_name: employee.emp_first_name,
        last_name: employee.emp_last_name,
        role_id: employee.emp_role_id,
        manager_id: employee.emp_manager_id
    }))

    console.table(employees)
    //console.log(employeeView)
};


// TODO ****************************************************************************************************
addDepartment = async () => {

    const answers = await inquirer.prompt([
        {
            message: 'What is the name of the department you want to add?',
            name: 'dept_name',
            type: 'input'
        },
    ])
    console.log(answers)

    let sqlQuery =  `INSERT INTO departments (dept_name) VALUES (?);`;

    console.log(sqlQuery)

    //let values = answers.name;

     db.query(sqlQuery, [answers.dept_name], (err, rows) => {
        if (err) throw err;
        console.log('Department added!')
    })

    // const departmentView = departments.map( department => ({
    //     id: department.dept_id,
    //     name: department.dept_name
    // }))

    // console.table(departments)
    //console.log(departmentView)

};

// TODO ****************************************************************************************************
addRole = async () => {
    const answers = await inquirer.prompt([
        {
            message: 'What is the name of the role you want to add?',
            name: 'role_title',
            type: 'input'
        },
        {
            message: 'What is the role\'s salary?',
            name: 'role_salary',
            type: 'input'
        },
        {
            message: 'What is role\'s department id?',
            name: 'foreign_department_id',
            type: 'input'
        },
    ])
    console.log(answers)

    let sqlQuery =  `INSERT INTO roles (role_title, role_salary, foreign_department_id) VALUES (?, ?, ?);`;

    console.log(sqlQuery)

    //let values = answers.name;

     db.query(sqlQuery, [answers.role_title, answers.role_salary, answers.foreign_department_id], (err, rows) => {
        if (err) throw err;
        console.log('Department added!')
    })
};

// TODO ****************************************************************************************************
addEmployee = async () => {

    const answers = await inquirer.prompt([

        {
            message: 'What is the employee\'s first name?',
            name: 'first_name',
            type: 'input',
        },
        {
            message: 'What is the employee\'s last name?',
            name: 'last_name',
            type: 'input',
        },
        {
            message: 'What is the employee\'s role?',
            name: 'emp_role_id',
            type: 'input',
        },
        {
            message: 'What is the employee\'s manager\'s id?',
            name: 'emp_manager_id',
            type: 'input',
        },
    
    ])


    console.log(answers)

    let sqlQuery =  `INSERT INTO employee (emp_first_name, emp_last_name, emp_role_id, emp_manager_id) VALUES (?, ?, ?, ?);`;

    console.log(sqlQuery)

    //let values = answers.name;

     db.query(sqlQuery, [answers.first_name, answers.last_name, answers.emp_role_id, answers.emp_manager_id], (err, rows) => {
        if (err) throw err;
        console.log('Department added!')
    })

    // const departments = await db.query('SELECT * FROM departments')

};

updateEmployeeRole = async () => {

};









// const createPost = async () => {
//     const users = await db.query('SELECT * FROM USERS')

//     const userChoices = users.map( user => ({
//         name: user.username,
//         value: user.id
//     }))

//     console.log(userChoices)

//     const answers = await inquirer.prompt([
//         {
//             message: 'What would you like to do?',
//             name: 'main_action',
//             type: 'list',
//             choices: ['View Departments', 'Add Employee', 'Add Department']
//         },
//         {
//             message: 'What is the content of the post?',
//             name: 'content',
//             type: 'input'
//         },
//         {
//             message: 'Who is the author of the post?',
//             name: 'author_id',
//             type: 'list',
//             choices: userChoices
//         }
        
//     ]);

//     await db.query(
//         'INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)',
//         [answers.title, answers.content, answers.author_id]
//         )
//     console.log(answers)
// }

createPost();
// viewDepartments();
// viewEmployees();
// viewRoles();