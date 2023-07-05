const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];
const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

function askQuestion(element) {
  rl.question(questions[element], (answer) => {
    answers.push(answer);
    if (element < questions.length - 1) {
      askQuestion(element + 1);
    } else {
      displayAnswers();
      rl.close();
    }
  });
}

function displayAnswers() {
  let result = '';
  console.log('The survey\'s collected answers:');
  for (let i = 0; i < questions.length; i++) {
    result = `${answers[0]} is his/her nickname. The activity that he/she likes doing
    is ${answers[1]} and he/she listens to ${answers[2]} while doing that. His/Her favorite
    meal is ${answers[3]} and he\'s/she favorite to eat after eating ${answers[3]} is
    ${answers[4]}. ${answers[0]}\'s favorite sport is ${answers[5]}, and lastly he\'s/she
    superpower is ${answers[6]}`;
  }
  console.log(result);
}

askQuestion(0)