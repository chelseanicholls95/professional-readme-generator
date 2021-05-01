// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license} license](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return "";
  }
};

// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `This application is licensed by ${license}.`;
  } else {
    return "This application is not licensed.";
  }
};

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

  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${projectTitle} ${licenseBadge}

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
  
  ${licenseSection}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${testing}
  
  ## Questions
  
  - Visit my [Github](${githubUrl})
  - Email me at: ${email}`;
};

module.exports = generateMarkdown;
