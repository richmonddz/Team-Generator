const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "teamGen.html");
const genTeam = require("./src/team.js");
team = [];

function startTeam() {
  function buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployee",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members needed, my team is complete.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployee) {
          case "Manager":
            addMan();
            break;
          case "Engineer":
            addEng();
            break;
          case "Intern":
            addInt();
            break;

          default:
            htmlBuilder();
        }
      });
  }

  function addMan() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "manName",
          message: "What is the manager's name?",
        },

        {
          type: "input",
          name: "manId",
          message: "What is the manager's ID#?",
        },

        {
          type: "input",
          name: "manEmail",
          message: "What is the manager's email?",
        },

        {
          type: "input",
          name: "manOfficeNumber",
          message: "What is the manager's office#?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.manName,
          answers.manId,
          answers.manEmail,
          answers.manOfficeNumber
        );
        team.push(manager);
        buildTeam();
      });
  }

  function addEng() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engName",
          message: "What is the engineers name?",
        },

        {
          type: "input",
          name: "engId",
          message: "What is the engineers employee ID#?",
        },

        {
          type: "input",
          name: "engEmail",
          message: "What is the engineers email?",
        },

        {
          type: "input",
          name: "engGithub",
          message: "What is the engineers GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engName,
          answers.engId,
          answers.engEmail,
          answers.engGithub
        );
        team.push(engineer);
        buildTeam();
      });
  }

  function addInt() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "intName",
          message: "What is the interns name?",
        },

        {
          type: "input",
          name: "intId",
          message: "What is the interns employee ID#?",
        },

        {
          type: "input",
          name: "intEmail",
          message: "What is the interns email?",
        },

        {
          type: "input",
          name: "intSchool",
          message: "What school does the intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.intName,
          answers.intId,
          answers.intEmail,
          answers.intSchool
        );
        team.push(intern);
        buildTeam();
      });
  }

  function htmlBuilder() {
    console.log("Your team is complete!!");

    fs.writeFileSync(outputPath, genTeam(team), "UTF-8");
  }

  buildTeam();
}

startTeam();
