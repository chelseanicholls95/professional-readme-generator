// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# Project Title

  ## Description
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue commodo ornare. Integer non ligula semper, consequat sapien vel, laoreet.
  
  ## Table of Contents
  
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)
  
  ## Installation
  
  \`\`\`
  npm install
  node index.js
  \`\`\`
  
  ## Usage
  
  Instructions for how to use the app.
  
  ## License
  
  This app is licensed by MIT.
  
  ## Contributing
  
  Open an issue or pull request.
  
  ## Tests
  
  There are no tests for this app.
  
  ## Questions
  
  - Visit my [Github](#)
  - Email me at: email@email.com`;
};

module.exports = generateMarkdown;
