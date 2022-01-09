// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ## Description Of The Repository
  ${data.description}
  ## Languages That Were Used During Creation
  ${data.languages}
  ## Installation Instructions
  ${data.installation}
  ## Usage Information
  ${data.usage}
  <img src="${data.relative}" alt="${data.alt}">
  ## Contributions
  ${data.contribution}
  ## Testing Instructions
  ${data.test}
  
  ### ${data.name}   Github: ${data.github}   Contact Info: ${data.email}


`;
}


module.exports = generateMarkdown;
