const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

const writeFile = fileContent => {
    console.log(fileContent)
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return; 
            }

            // if everything went well, resolve the Promise and send the succsessfull data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;