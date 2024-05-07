import inquirer from 'inquirer'

const answer :{
    sentence: string
} = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message:'Please enter the paragraph to count the words:'
    }
])

const words =answer.sentence.trim().split(" ")

console.log(words)

console.log(`the total words are ${words.length}`);
