const createTableOfContents = (each) => {
  if (each[1] !== "") {
    if (each[0] == "licenseBadge" || each[0] == "licenseText") {
      return "[License](#license) <br/>";
    } else {
      const title = each[0].charAt(0).toUpperCase() + each[0].slice(1);
      return `[${title}](#${title}) <br/>`;
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
    questions,
  } = data;

  const dataArray = Object.entries(data);
  const tableOfContentsArray = dataArray.slice(1).map(createTableOfContents);

  const tableOfContents = [...new Set(tableOfContentsArray)];

  return `# ${title} ${licenseBadge}

  ${description}
  
  ## Table of Contents

  ${tableOfContents.join("")}
  
  ${installation}
  
  ${usage}
  
  ${licenseText}
  
  ${contributing}
  
  ${testing}

  ${questions}`;
};

module.exports = generateMarkdown;
