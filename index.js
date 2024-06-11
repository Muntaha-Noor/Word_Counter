#! /usr/bin/env node
// This line tells the computer to run the script using Node.js.
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:",
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
