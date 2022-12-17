// TODO: Create a function that returns a license badge based on which license is passed in
// const selected = `[![License: ${license}](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/${license}/)`
// }// If there is no license, return an empty string
// function renderLicenseBadge({license}) {
  


// TODO: Create a function to generate markdown for README
const generateMarkdown = ({projectTitle,description,install,usage,license,features,contributions,test,contactEmail,contactGit}) => 
   ` #<${projectTitle}>

  ## Description

- ${description}
  
  ## Table of Contents
  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${install}
  
  ## Usage
 ${usage}
  
     
 ## License
  
  ${license}
  
  ---
  
  🏆 
  
  ## Badges
  
  - [![License: ${license}](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/${license}/)
  
  ## Features
  
 ${features}
  
  ## How to Contribute
  
${contributions}  
  ## Tests
  ${test}
 
  ## Questions 
[Any questions regarding this application contact me at] (${contactEmail})
[Link to my Github profile](${contactGit})
`;


module.exports = generateMarkdown;
