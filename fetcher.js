
const request = require('request');

request('http://www.example.edu/', { json: true }, (err, res, body) => {
    if (err) return console.log(err);
    console.log(body.url);
    console.log(body.explanation);
    fs = require('fs'); // importing fs package to use within the code
    fs.writeFile('index.html', res, (err) => { // writing the file 
        if (err) {
            return console.log(err);
        }
        console.log(`Download and saved ${body.length} bytes to ./index.html`); // printing out the response 
    });

});
