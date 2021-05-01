const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Please provide a brief description of the project.",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "list",
    message: "Who is your project licensed by?",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "How can someone contribute to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What tests are there for this project?",
    name: "testing",
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "githubUrl",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

const writeToFile = (data) => {
  const callback = (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Successfully added to file!");
    }
  };

  fs.writeFile("generated-readme.md", data, callback);
};

const init = async () => {
  const answers = await inquirer.prompt(questions);
  const generatedMarkdown = generateMarkdown(answers);
  writeToFile(generatedMarkdown);
};

// Function call to initialize app
init();
