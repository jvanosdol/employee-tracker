// view all departments
// SELECT * FROM department

// view all roles
// SELECT * FROM role

// View all employees
// SELECT * FROM employees

// create new department

// prompt the user for the "name" of the department

    // THEN run the query
    // INSERT INTO department (name)
    // VALUES ("Sales")

        //THen ask the user what they want to do next, returns them back to the starting query


// Create new role

// Get the existing departments from the 'department' table

    // THEN prompt the user for the 'title', 'salary', and 'department' for the role

        // THEN Run the query

            // INSERT INTO role (title, salary, department_id)
            // VALUES ("Manager", 120000, 001)

                // THen ask the user what they want to do next

const mysql = require('mysql2');
const utils = require('util');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password123',
        database: 'employee_db'
    },
);

db.query = utils.promisify(db.query);

const createPost = async () => {
    const users = await db.query('SELECT * FROM USERS')

    const userChoices = users.map( user => ({
        name: user.username,
        value: user.id
    }))

    console.log(userChoices)

    const answers = await inquirer.prompt([

        {
            message: 'What would you like to do?',
            name: 'main_action',
            type: 'list',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add and Employee', 'Update an Employee Role']
        },

    ]);

    await db.query(
        'INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)',
        [answers.title, answers.content, answers.author_id]
        )
    console.log(answers)
}



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