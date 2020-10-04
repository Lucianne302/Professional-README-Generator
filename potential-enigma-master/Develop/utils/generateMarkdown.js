// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  
  return `##Title: ${data.title}

## Table of Contents: 
* [Description](#description) 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#licenses)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

#Badge 
# <a name="badge"></a>
${data.confirmAddBadge}

#Description 
# <a name="description"></a>
${data.desc}

#Installation 
# <a name="installation"></a>
${data.installation}

##Usage 
# <a name="usage"></a>
${data.usage}

#Credits 
# <a name="credits"></a>
${data.credits}

#Licenses 
# <a name="licenses"></a>
${data.licenses}

#Contributors 
# <a name="contributors"></a>
${data.contributors}

#Test 
# <a name="tests"></a>
${data.test}

#Questions 
# <a name="questions"></a>
GitHub Username: ${data.github}
GitHub Profile Link: ${data.link}
For questions, contact me at: ${data.email}

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

