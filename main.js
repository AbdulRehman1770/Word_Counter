import inquirer from "inquirer";
import chalk from "chalk";
async function Word_Counter() {
    console.log(chalk.bold.cyanBright("\n \t\tWords Counter Code\n"));
    let Word = await inquirer.prompt({
        message: "Enter A Sentence",
        type: "input",
        name: "Sentence"
    });
    let WordsCounter = Word.Sentence.trim().split(" ");
    console.log(`Total Words : ${WordsCounter.length}`);
}
Word_Counter();
