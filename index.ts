import inquirer from "inquirer";
import chalk from "chalk";
const currency: any = {
    USD: 1,       PKR: 277.54,  EURO: 0.92,  
    RUB: 92.58,   SAR: 3.75,    INR: 83.30,
    GBP: 0.79,    AUD: 1.52,    TRY: 32.03,   JPY: 151.59,
}
let user_answer = await inquirer.prompt([
        {
            name: "FromCurrency",  type: "list",
            message: chalk.bold.underline("Select Your Currency: "),
            choices: ["USD","PKR","EURO","RUB","SAR","INR",
                       "GBP","AUD","TRY","JPY"]
        },
        {
            name: "ToCurrency",   type:  "list",
            message: chalk.bold.underline("Enter to currency: "),
            choices: ["USD","PKR","EURO","RUB","SAR","INR",
                       "GBP","AUD","TRY","JPY"]
        },
        {
            name: "Amount",   type: "number",
            message:chalk.bold.underline ("Enter Your Amount You want to Convert:"),
        }
    ]); 
let FromCurrencyAmount = currency[user_answer.FromCurrency]
let ToCurrencyAmount= currency[user_answer.ToCurrency]
let Amount = user_answer.Amount
let BaseAmount = Amount / FromCurrencyAmount
let TotalConvertedAmount = BaseAmount* ToCurrencyAmount
console.log(chalk.bold.underline("Your Converted Currency Aamount is:"));
console.log(chalk.bold.bgBlueBright.italic(TotalConvertedAmount));