const validateProjectTitle = (title) => {
  if (title !== "") {
    return title.charAt(0).toUpperCase() + title.slice(1);
  } else {
    return "Project Title";
  }
};

const createDescriptionSection = (section, info) => {
  if (section === true) {
    const text = info.charAt(0).toUpperCase() + info.slice(1);
    return `## Description \n ${text}`;
  } else {
    return "";
  }
};

const createInstallationSection = (...args) => {
  const info1 = args[1];
  const text1 = info1.charAt(0).toUpperCase() + info1.slice(1);

  if (args[0] === true && args[2] === true) {
    const info2 = args[3];
    const text2 = info2.charAt(0).toUpperCase() + info2.slice(1);
    return `## Installation \n \`\`\` \n ${text1} \n ${text2} \n \`\`\``;
  } else if (args[0] === true && args[2] !== true) {
    return `## Installation \n \`\`\` \n ${text1} \n \`\`\``;
  } else {
    return "";
  }
};

const createUsageSection = (section, info) => {
  if (section === true) {
    const text = info.charAt(0).toUpperCase() + info.slice(1);
    return `## Usage \n ${text}`;
  } else {
    return "";
  }
};

const createContributingSection = (section, info) => {
  if (section === true) {
    const text = info.charAt(0).toUpperCase() + info.slice(1);
    return `## Contributing \n ${text}`;
  } else {
    return "";
  }
};

const createTestingSection = (section, info) => {
  if (section === true) {
    const text = info.charAt(0).toUpperCase() + info.slice(1);
    return `## Testing \n ${text}`;
  } else {
    return "";
  }
};

const createLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license} license](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return "";
  }
};

const createLicenseSection = (license) => {
  if (license !== "None") {
    return `## License \n This application is licensed by ${license}.`;
  } else {
    return "This application is not licensed.";
  }
};

const manageLicenseSection = (section, info) => {
  if (section === true) {
    const licenseBadge = createLicenseBadge(info);
    const licenseText = createLicenseSection(info);

    return {
      licenseBadge,
      licenseText,
    };
  } else {
    return "";
  }
};

const manageQuestionsSection = (section, github, email) => {
  if (section === true) {
    return {
      github,
      email,
    };
  } else {
    return "";
  }
};

const createQuestionSection = (data) => {
  const { github, email } = data;

  if (data !== "") {
    return `## Questions \n
    - Visit my [Github](${github}) \n
    - Email me at: ${email}`;
  } else {
    return "";
  }
};

const manageAnswers = (answers) => {
  const {
    projectTitle,
    descriptionSection,
    descriptionInfo,
    installationSection,
    installationInfo,
    installationSection2,
    installationInfo2,
    usageSection,
    usageInfo,
    licenseSection,
    licenseInfo,
    contributingSection,
    contributingInfo,
    testingSection,
    testingInfo,
    questionsSection,
    githubUrl,
    email,
  } = answers;

  const title = validateProjectTitle(projectTitle);

  const description = createDescriptionSection(
    descriptionSection,
    descriptionInfo
  );
  const installation = createInstallationSection(
    installationSection,
    installationInfo,
    installationSection2,
    installationInfo2
  );
  const usage = createUsageSection(usageSection, usageInfo);
  const contributing = createContributingSection(
    contributingSection,
    contributingInfo
  );
  const testing = createTestingSection(testingSection, testingInfo);

  const license = manageLicenseSection(licenseSection, licenseInfo);

  const managedQuestionsSection = manageQuestionsSection(
    questionsSection,
    githubUrl,
    email
  );
  const questions = createQuestionSection(managedQuestionsSection);

  const managedAnswers = {
    title,
    description,
    installation,
    usage,
    contributing,
    testing,
    ...license,
    questions,
  };

  return managedAnswers;
};

module.exports = manageAnswers;
