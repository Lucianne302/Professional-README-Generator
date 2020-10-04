// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  
  return `##Title: ${data.title}<br>

## Table of Contents: 
* [Description](#description) 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#licenses)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

#Badge <a name="badge"></a><br>
${data.confirmAddBadge}

#Description <a name="description"></a><br>
${data.desc}

#Installation <a name="installation"></a><br>
${data.installation}

#Usage <a name="usage"></a><br>
${data.usage}

#Credits <a name="credits"></a><br>
${data.credits}

#Licenses <a name="licenses"></a><br>
${data.licenses}

#Contributors <a name="contributors"></a><br>
${data.contributors}

#Test <a name="tests"></a><br>
${data.test}

#Questions <a name="questions"></a><br>
GitHub Username: ${data.github}<br>
GitHub Profile Link: ${data.link}<br>
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

