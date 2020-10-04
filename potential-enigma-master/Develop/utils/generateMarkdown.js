// create the about section
const genBadge = myBadge => {
  console.log('***'+myBadge);

  let tmpContent="";
  let myLink="";
  let myIcon="";
  let myLicense="";

  if (!myBadge) {
      return '';
  } 
  
if (myBadge=="PDDL"){
  myLicense = ": ODbL"
  myLink="https://opendatacommons.org/licenses/pddl/";
  myIcon="License-PDDL-brightgreen.svg";
} else if (myBadge=="LGPL"){
  myLicense = ": LGPL v3"
  myLink="https://www.gnu.org/licenses/lgpl-3.0";
  myIcon="License-LGPL%20v3-blue.svg";
} else if (myBadge=="ISC"){
  myLicense = ": ISC"
  myLink="https://opensource.org/licenses/ISC";
  myIcon="License-ISC-blue.svg";
} else if (myBadge==": MIT"){
  myLicense = "MIT"
  myLink="https://opensource.org/licenses/MIT";
  myIcon="License-MIT-yellow.svg";
} else if (myBadge=="Apache"){
  myLicense = ""
  myLink="https://opensource.org/licenses/Apache-2.0";
  myIcon="License-Apache%202.0-blue.svg";
}

//tmpContent="[![License"+myLicense+"](https://img.shields.io/badge/"+myIcon+")]("+myLink+")";
//return tmpContent;

    return `
    [![License`+myLicense+`](https://img.shields.io/badge/`+myIcon+`)](`+myLink+`)
  `;
};


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  
    // this will create three variables based on data in templateData
    const { licenses, ...myData } = data;


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
${genBadge(licenses)}


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

