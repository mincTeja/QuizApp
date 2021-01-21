const readLineSync = require('readline-sync');
const figlet = require('figlet');
const chalk = require('chalk');

let score;
const listOfQuestions=[
  {
    question : "1. What is the capital of India?",
    options : ["Delhi","Bangalore","Chennai","Mumbai"],
    answer : "a"
  },
  {
    question : "2. What is the capital of Karnataka?",
    options : ["Delhi","Bangalore","Chennai","Mumbai"],
    answer : "b"
  },
  {
    question : "3. What is the capital of Tamil Nadu?",
    options : ["Delhi","Bangalore","Chennai","Mumbai"],
    answer : "c"
  },
  {
    question : "4. What is the capital of Maharashtra?",
    options : ["Delhi","Bangalore","Chennai","Mumbai"],
    answer : "d"
  },
  {
    question : "5. What is the capital of Telangana?",
    options : ["Delhi","Chennai","Hyderabad","Mumbai"],
    answer : "c"
  }
];


//return score of the user
function usersScore(){
  return score;
}

//incrmenting score of the user by 1
function incrementScore(){
  score+=1;
}

//initializing score to 0
function initializeScore(){
  score=0;
}

//returns formated questions and options to be displayed
function formatQuestionToDisplay(questionToFormat){

  questionToBeShown=`
  ${questionToFormat.question} \n
  a. ${questionToFormat.options[0]}\n
  b. ${questionToFormat.options[1]}\n
  c. ${questionToFormat.options[2]}\n
  d. ${questionToFormat.options[3]}\n\n 
  Answer: `;
  return questionToBeShown;

}

//display correct answer if user enters wrong answer
function displayCorrectAnswer(questionaire){

  console.log("\nOops! That was a wrong answer.");
  console.log(chalk.green(
    `Correct Answer : ${questionaire.answer}
    `
  ));

}

//start of the quiz
function startQuiz(questionaire){

  let questionToBeShown=formatQuestionToDisplay(questionaire);
  
  let answerEntered = readLineSync.question(chalk.red(questionToBeShown));
  
  if(answerEntered.toLowerCase()===questionaire.answer.toLowerCase()){
      incrementScore();
      console.log(chalk.green("\nWohoo!! You are answer is Correct.\n"));
    }
  else{
      displayCorrectAnswer(questionaire);
  }
  readLineSync.question("Press Enter to continue");
  console.clear();

}

//check if user wants to play
function wantToPlayQuiz(wantToPlay){

  if(wantToPlay.toLowerCase() === "y"){
    initializeScore();
    listOfQuestions.forEach(startQuiz);
    return 1;
  }
  else{
    console.clear();
    console.log(chalk.blue.bgWhite.bold('Thank you for visiting us'));
    return 0;
  }
  
}

module.exports={
  wantToPlayQuiz,
  usersScore
}