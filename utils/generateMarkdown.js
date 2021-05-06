const generateMarkdown = (data) => {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    testing,
    licenseBadge,
    licenseText,
    github,
    email,
  } = data;

  return `# ${title} ${licenseBadge}

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
  
  ${licenseText}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${testing}
  
  ## Questions
  
  - Visit my [Github](${github})
  - Email me at: ${email}`;
};

module.exports = generateMarkdown;
