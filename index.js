#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operator",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication"],
    }
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multipliction") {
    console.log(answer.firstNumber * answer.secondNumber);
    // }else if (answer.operator === "Division") {
    //     console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please enter your valiad number");
}
