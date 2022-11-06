const inquirer = requre('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptInfo =() => {
    return inquirer.prompt ( [
        {
            type: 'input',
            name: 'name1',
            message: 'Amanda',
        },
        {
            type: 'input',
            name: 'id1',
            message: 'What is your ID?',

        },
        {
            type:'input',
            name: 'email1',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'role1',
            message: 'Employee',
        },
        {
            type: 'input',
            name: 'name2',
            message: 'Kenny',
        },
        {
            type: 'input',
            name: 'id2',
            message: 'What is your ID?',
        },
        {
        type:'input',
        name: 'email2',
        message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            
        },
        {
            type: 'input',
            name:'role2',
            message: 'Manager',
        },
        {
            type: 'input',
            name:'name3',
            message: 'Jon',
        },
        {
            type: 'input',
            name:'id3',
            message: 'What is your ID?',
        },
        {
            type: 'input',
            name:'email3',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name:'github',
            message: 'Enter your Github User',
        },
        {
            type: 'input',
            name:'role3',
            message: 'Engineer',
        },
        {
            type: 'input',
            name:'name4',
            message: 'Julian',
        },
        {
            type: 'input',
            name:'id4',
            message: 'What is your ID',
        },
        { 
            type: 'input',
            name:'email4',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name:'school',
            message: 'Enter school name',    
        },
        {
            type: 'input',
            name:'role4',
            message: 'Intern',
        },
    ]);
};
