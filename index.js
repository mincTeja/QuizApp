const readLineSync = require('readline-sync');
const chalk = require('chalk');
const figlet = require('figlet');
const quizStarter = require('./QuizStarter');

//to display rules to the user
function rulesToPlayQuiz(){
  let rulesToBeDisplayed=`
  1. The Quiz will contain 5 Questions with 4 options.
  2. User has to select an option a/b/c/d or A/B/C/D.
  3. Selection of any other option than stated in point 2 will be considered wrong.
  `
  console.log(chalk.blue(rulesToBeDisplayed));
}

//to display name/logo of the application
function displayQuizAppLogo(nameOfTheApplication="QuizApp"){
  console.log(
  chalk.yellow(
    figlet.textSync(nameOfTheApplication, { horizontalLayout: 'full' })
  )
);
}

//returns text to ask users to play or not
function askToPlayString(additonalText=""){
  let askToPlayText=`\nWould you like to play ${additonalText}quiz (y/n)?\n`;
  return askToPlayText;
}

displayQuizAppLogo();

let name = readLineSync.question("Hello Pal!, What is your name?\n");
console.clear();

console.log("Hello! "+ name.toUpperCase() + " Welcome to the QuizApp.\n");

rulesToPlayQuiz();

let wantToPlay = readLineSync.question(chalk.green(askToPlayString()));
console.clear();


while(1){
  let temp=quizStarter.wantToPlayQuiz(wantToPlay);
  if(temp===0){
    break;
  }
  console.clear();
  console.log("Congratulations! You have scored "+quizStarter.usersScore());
  wantToPlay = readLineSync.question(chalk.green(askToPlayString("again ")));
  console.clear();
}



