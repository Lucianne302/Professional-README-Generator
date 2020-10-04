const { writeFile, copyFile } = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

const mockData = {
    title: 'TrumpSucks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare massa eget egestas purus. Velit ut tortor pretium viverra suspendisse potenti nullam. Arcu risus quis varius quam quisque id. Risus feugiat in ante metus dictum at tempor. Sodales ut eu sem integer. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Non enim praesent elementum facilisis leo vel. Sem et tortor consequat id porta. Sodales ut etiam sit amet nisl purus. Viverra aliquet eget sit amet tellus cras. Fames ac turpis egestas sed tempus urna. Sit amet facilisis magna etiam tempor. Placerat vestibulum lectus mauris ultrices eros. Pellentesque diam volutpat commodo sed egestas egestas fringilla. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Dolor sed viverra ipsum nunc aliquet. Pellentesque sit amet porttitor eget dolor morbi non.',
    table_of_Contents: 'toc',
    installation: 'yep',
    usage: 'used',
    license: '007',
    contributing: 'Bond',
    tests: 'camera,microphone,dishwasher,tv',
    questions: 'why am i making this?'
//    Sections: []
  }

const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');



// array of questions for user
//const questions = [];
const promptQuestions= () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Project Title? (Required)',
            validate: titleInput => {
              if (titleInput){
                return true; 
              } else {
                console.log('Please enter the Project Title');
                return false;
              }
            }
        } , 
        {
            type: 'input',
            name: 'desc',
            message: 'Describe your project: ',
            validate: descriptionInput => {
              if (descriptionInput){
                return true; 
              } else {
                console.log('Please enter a description!');
                return false;
              }
            }
        }
    ]);
};

// function to write README file
//function writeToFile(fileName, data) {
function writeToFile(fileName,data) {
        //data=mockData; // testing only

        fs.writeFile('../ReadMeFiles/'+fileName+'.md', data, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Readme created! Check out '+fileName+' in the ReadMeFiles directory to see it!');
        }
    )
};

// function to initialize program
function init() {
    promptQuestions()
        .then(data=>{
            return Promise.resolve([data,generateMarkdown(data)]);
        })
        .then(data=>{writeToFile(data[0].title,data[1])})
        .catch(err => {writeFile
            console.log(err);
        });
}


// function call to initialize program
init();