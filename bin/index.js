#! /usr/bin/env node

const args = process.argv.slice(1);

// Welcome Message
console.log("Welcome to Easy Integration creat-easyintegration-app");

if (args.length < 1) {
    console.error('Please enter folder name');
    process.exit(1);
}

// Adieu
console.log("Root Application Created Successfully");
process.exit(0);