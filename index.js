// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkDown')
// TODO: Create an array of questions for user input
inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What do you want the Title of Your Project to be ?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide instructions and examples for use.',
            choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License','Eclipse Public License 1.0','GNU GPL v3','GNU GPL v2','GNU AGPL v3','GNU LGPL v3','GNU FDL v1.3','IBM Public License Version 1.0','ISC License (ISC)','The MIT License','The Unlicense']//fill in the liscense options here 
        },
        {
            type: 'input',
            name: 'features',
            message: 'list the features of your project here',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here.',
        },
        {
            type: 'input',
            name: 'test',
            message: ' Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        },
        {
            type: 'input',
            name: 'contactEmail',
            message: 'What is your email adress?',
        },
        {
            type: 'input',
            name: 'contactGit',
            message: 'Copy a link to your Github here?',
        },

    ])

    .then((answers) => {
        const readMecontent = generateMarkdown(answers)
        fs.writeFile('myREADME.MD', readMecontent, (err) => 
        err ? console.log(err) : console.log( "File has been generated!"))

    });

