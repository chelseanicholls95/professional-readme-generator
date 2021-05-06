const createTableOfContents = (each) => {
  console.log(each[1]);
  if (each[1] !== "") {
    if (each[0] == "licenseBadge" || each[0] == "licenseText") {
      return "[license](#license) \n";
    } else if (each[0] == "github" || each[0] == "email") {
      return "[questions](#questions) \n";
    } else {
      return `[${each[0]}](#${each[0]}) \n`;
    }
  } else {
    return "";
  }
};

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

  const dataArray = Object.entries(data);
  const tableOfContentsArray = dataArray.map(createTableOfContents);

  const tableOfContents = [...new Set(tableOfContentsArray)];

  return `# ${title} ${licenseBadge}

  ## Description

  ${description}
  
  ## Table of Contents

  ${tableOfContents.join("")}
  
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
