
/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const axios = require('axios');
const markov = require('./markov');



function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());
}

function makeText(path) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log("ERROR....", err);
            process.exit(1);
        }
        else {
            generateText(data);
        }
    });
}

async function makeURLText(url) {
    let res;

    try {
        res = await axios.get(url);
    } catch (error) {
        console.log("ERROR....", err);
        process.exit(1);
    }
    generateText(res.data);

}

let [method, path] = process.argv.slice(2);

if (method === "file") {
    makeText(path);
}

else if (method === "url") {
    makeURLText(path);
}

else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}
