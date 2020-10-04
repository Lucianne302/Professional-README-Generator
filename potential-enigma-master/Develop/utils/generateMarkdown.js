// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  
  return `##Title: ${data.title}

##Description: ${data.desc}

##Installation: ${data.installation}

##Usage: ${data.usage}

##Credits: ${data.credits}

##Licenses: ${data.licenses}

##Badge: ${data.confirmAddBadge}

##Contributors: ${data.contributors}

##Test: ${data.test}

##github: ${data.github}

##link: ${data.link}

`;
}

module.exports = generateMarkdown;

// module.exports = generateMarkdown => {
//   console.log(templateData);

//  // this will create three variables based on data in templateData
// // const { projects, about, ...header } = templateData;

// return `
//  YOUR README CONTENT/FORMAT HERE and plugin variables
// `;

// }

