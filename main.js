import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\t Welcome to Code With Rabia Currency Converter\n\t"));
// Defining the currency list and their excahnge rates
let exchange_rate = {
    "USD": 1, // Base currency
    "EUR": 0.9, //European currency(Euro)
    "JYP": 113, // Japanese currency (Yen)
    "CAD": 1.3, // Canadian dollar
    "AUD": 1.65, //Australian dollar
    "PKR": 280, // Pakistani rupees
};
// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currenecy",
        type: "list",
        message: chalk.green(" Select currency to convert from"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.green("Select the currency to convert into"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.green("Enter the amount to convert:")
    }
]);
// perform currency conversion by using formulae
let from_amount = exchange_rate[user_answer.from_currenecy];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount
console.log(chalk.blue(`Converted amount = ${converted_amount}`));
