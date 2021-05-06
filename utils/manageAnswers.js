const validateProjectTitle = (title) => {
  if (title !== "") {
    return title.charAt(0).toUpperCase() + title.slice(1);
  } else {
    return "Project Title";
  }
};

const manageSections = (section, info) => {
  if (section === true) {
    return info.charAt(0).toUpperCase() + info.slice(1);
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
    return `This application is licensed by ${license}.`;
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

const manageAnswers = (answers) => {
  const {
    projectTitle,
    descriptionSection,
    descriptionInfo,
    installationSection,
    installationInfo,
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

  const description = manageSections(descriptionSection, descriptionInfo);
  const installation = manageSections(installationSection, installationInfo);
  const usage = manageSections(usageSection, usageInfo);
  const contributing = manageSections(contributingSection, contributingInfo);
  const testing = manageSections(testingSection, testingInfo);

  const license = manageLicenseSection(licenseSection, licenseInfo);

  const questions = manageQuestionsSection(questionsSection, githubUrl, email);

  const managedAnswers = {
    title,
    description,
    installation,
    usage,
    contributing,
    testing,
    ...license,
    ...questions,
  };

  return managedAnswers;
};

module.exports = manageAnswers;
