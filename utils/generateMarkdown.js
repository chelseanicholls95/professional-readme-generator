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
  const {
    projectTitle,
    description,
    installation,
    usage,
    license,
    contributing,
    testing,
    githubUrl,
    email,
  } = data;

  return `# ${projectTitle}

  ## Description

  ${description}
  
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
  ${installation}
  \`\`\`
  
  ## Usage
  
  ${usage}
  
  ## License
  
  This application is licensed by ${license}.
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${testing}
  
  ## Questions
  
  - Visit my [Github](${githubUrl})
  - Email me at: ${email}`;
};

module.exports = generateMarkdown;
