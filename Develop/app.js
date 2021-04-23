const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = []

function menu() {
    function createManager() {
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter Manager's Name",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Response Required!";
                },
            },
            {
                type: "input",
                name: "id",
                message: "Enter Manager ID",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Integer response required!";
                },
            },
            {
                type: "input",
                name: "email",
                message: "Enter Manager's Email",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Email Address Required!";
                },
            },
            {
                type: "input",
                name:"officeNumber",
                message:"Enter Manager's Office Number",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Office Number Required!"
                },
            },
        ])
        .then(function (managerData) {
            var createManager = new Manager(
                managerData.name,
                managerData.id,
                managerData.email,
                managerData.officeNumber);
                teamMembers.push(createManager);

            })
    }
    function createEngineer() {
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter Engineer's Name",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Response Required!";
                },
            },
            {
                type: "input",
                name: "id",
                message: "Enter Engineer's ID",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Integer response required!";
                },
            },
            {
                type: "input",
                name: "email",
                message: "Enter Engineer's Email",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Email Address Required!";
                },
            },
            {
                type: "input",
                name:"github",
                message:"Enter Engineer's Github",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Github required!"
                },
            },
        ])
        .then(function (engineerData) {
            var createEngineer = new Engineer(
                engineerData.name,
                engineerData.id,
                engineerData.email,
                engineerData.github);
                teamMembers.push(createEngineer);

            })
    }
    function createIntern() {
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter Intern's Name",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Response Required!";
                },
            },
            {
                type: "input",
                name: "id",
                message: "Enter Intern's ID",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Integer response required!";
                },
            },
            {
                type: "input",
                name: "email",
                message: "Enter Intern's Email",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "Email Address Required!";
                },
            },
            {
                type: "input",
                name:"school",
                message:"Enter Intern's School",
                validate: (answer) => {
                    if (answer !== "" ) {
                        return true;
                    }
                    return "School required!"
                },
            },
        ])
        .then(function (internData) {
            var createIntern = new Intern(
                internData.name,
                internData.id,
                internData.email,
                internData.school);
                teamMembers.push(createIntern);

            })
    }

}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
