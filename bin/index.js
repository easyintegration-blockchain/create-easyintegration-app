#! /usr/bin/env node

const fs = require('fs');
const shell = require('shelljs');
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
        shell.cd(foldername);
        shell.exec('git clone https://github.com/easyintegration-blockchain/create-easyintegration-app .');
        shell.exec('rm -rf bin');
    }
})

// Adieu
console.log("Application Created Successfully");
process.exit(0);