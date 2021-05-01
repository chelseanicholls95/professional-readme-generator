// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "projectTitle",
  },
  // {
  //   type: "input",
  //   message: "Please provide a brief description of the project.",
  //   name: "description",
  // },
  // {
  //   type: "input",
  //   message: "How do you install your project?",
  //   name: "installation",
  // },
  // {
  //   type: "input",
  //   message: "How do you use your application?",
  //   name: "usage",
  // },
  // {
  //   type: "list",
  //   message: "Who is your project licensed by?",
  //   choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
  //   name: "license",
  // },
  // {
  //   type: "input",
  //   message: "How can someone contribute to your project?",
  //   name: "contributing",
  // },
  // {
  //   type: "input",
  //   message: "What tests are there for this project?",
  //   name: "testing",
  // },
  // {
  //   type: "input",
  //   message: "What is your GitHub URL?",
  //   name: "githubUrl",
  // },
  // {
  //   type: "input",
  //   message: "What is your email address?",
  //   name: "email",
  // },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);
  const generatedMarkdown = generateMarkdown(answers);
  console.log(generatedMarkdown);
};

// Function call to initialize app
init();
