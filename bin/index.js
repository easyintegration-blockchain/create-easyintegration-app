#! /usr/bin/env node

const fs = require('fs');
const { exec } = require("child_process");
const args = process.argv.slice(1);

// Welcome Message
console.log("Welcome to Easy Integration `create-easyintegration-app`");

if (args.length < 2) {
    console.error('Please enter folder name');
    process.exit(1);
}

args.reduce((location, foldername) => {
    let location_details = location+"/"+foldername
    if(fs.existsSync(foldername)){
        console.error('Folder already exists @Folder => '+location_details);
        process.exit(1);
    }else{
        console.log("Creating Application @Folder => "+location_details);
        fs.mkdirSync(foldername, { recursive: true });
        exec('cd '+location_details, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        exec('git clone https://github.com/easyintegration-blockchain/create-easyintegration-app .', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
})

// Adieu
console.log("Application Created Successfully");
process.exit(0);