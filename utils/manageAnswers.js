const validateProjectTitle = (title) => {
  if (title !== "") {
    return title.charAt(0).toUpperCase() + title.slice(1);
  } else {
    return "Project Title";
  }
};

const manageDescription = (descriptionSection, descriptionInfo) => {
  if (descriptionSection === true) {
    return descriptionInfo.charAt(0).toUpperCase() + title.slice(1);
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
  const  = manageDescription(descriptionSection, descriptionInfo);

  const managedAnswers = {
    title,
    description,
  };

  return managedAnswers;
};

module.exports = manageAnswers;
