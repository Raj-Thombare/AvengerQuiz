var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.blue.bgYellowBright.bold("May i have your name? "));

console.log(chalk.bgRedBright.bold("Welcome " + userName + " to Avengers Quiz!"))

var questions = [{
  question:` What's the name of Black Panthers Kingdom?
             a: Makanda
             b: Wakanda
             c: Lambina\n`,
  answer:"b"
},{
  question:` Who sacrificed themselves on Vormir in Avengers: Endgame?
             a: Natasha
             b: Clint
             c: Lambina\n`,
  answer:"a"
},{
  question:` Finish this line from Thanos: "______."
             a: "I am Ironman!"
             b: “I am inevitable!”\n`
             ,
  answer:"b"
},{
  question:` What is Iron Man's real name?
             a: Bruce Banner
             b: Steve Rogers
             c: Tony Stark\n`,
  answer:"c"
},{
  question:` Who is the only Avenger who is able to budge Thor's hammer?
             a: Ironman
             b: Captain America
             c: The Hulk\n`,
  answer:"b"
},];



function play(question, answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer===answer){
    console.log(chalk.green.bold("Right!"))
    score = score + 1;
    console.log(chalk.cyan.bold("Current Score: " + score))
  }else {
    console.log(chalk.red.bold("Wrong!"))
    score = score - 1;
    console.log(chalk.cyan.bold("Current Score: " + score))
  }
}


for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

if(score>3){
  console.log(chalk.blue.bgYellowBright.bold("Yay!! Congratulations :D"))
}else {
  console.log(chalk.blue.bgYellowBright.bold("oops! Bad luck score more next time :( "))
}
console.log(chalk.bgRedBright("Final Score: " + score))