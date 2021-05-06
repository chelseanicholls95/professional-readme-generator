const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const manageAnswers = require("./utils/manageAnswers");

const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "projectTitle",
  },
  {
    type: "confirm",
    message: "Do you want to add a description?",
    name: "descriptionSection",
  },
  {
    type: "input",
    message: "Please provide a brief description of the project.",
    name: "descriptionInfo",
    when: (answers) => {
      return answers.descriptionSection;
    },
  },
  {
    type: "confirm",
    message: "Do you want to add an installation section?",
    name: "installationSection",
  },
  {
    type: "input",
    message: "How do you install your project?",
    name: "installationInfo",
    when: (answers) => {
      return answers.installationSection;
    },
  },
  {
    type: "confirm",
    message: "Do you want to add an usage section?",
    name: "usageSection",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usageInfo",
    when: (answers) => {
      return answers.usageSection;
    },
  },
  {
    type: "confirm",
    message: "Do you want to add an license section?",
    name: "licenseSection",
  },
  {
    type: "list",
    message: "Who is your project licensed by?",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    name: "licenseInfo",
    when: (answers) => {
      return answers.licenseSection;
    },
  },
  {
    type: "confirm",
    message: "Do you want to add an contributing section?",
    name: "contributingSection",
  },
  {
    type: "input",
    message: "How can someone contribute to your project?",
    name: "contributingInfo",
    when: (answers) => {
      return answers.contributingSection;
    },
  },
  {
    type: "confirm",
    message: "Do you want to add an testing section?",
    name: "testingSection",
  },
  {
    type: "input",
    message: "What tests are there for this project?",
    name: "testingInfo",
    when: (answers) => {
      return answers.testingSection;
    },
  },
  {
    type: "confirm",
    message: "Do you want to add a questions section?",
    name: "questionsSection",
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "githubUrl",
    when: (answers) => {
      return answers.questionsSection;
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    when: (answers) => {
      return answers.questionsSection;
    },
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
  const managedAnswers = manageAnswers(answers);
  const generatedMarkdown = generateMarkdown(managedAnswers);
  console.log(generatedMarkdown);
  // writeToFile(generatedMarkdown);
};

// Function call to initialize app
init();
