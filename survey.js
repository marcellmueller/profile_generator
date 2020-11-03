const readline = require("readline");
const chalk = require("chalk");

let firstName = "";
let lastName = "";
let favoriteMovie = "";
let favoriteFood = "";
let hobbies = "";
let city = "";
let travel = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(chalk.red("Welcome to the Social Media Profile Generator!"));
console.log("I will ask you some questions and create a profile for you.");
console.log(chalk.blue("Let's begin"));
console.log(chalk.green("------------------------------------------"));
//The infamous callback hell!
rl.question("What is your first name? ", (answer) => {
  firstName = answer;
  console.log(chalk.yellow(`Thanks, ${answer}`));

  rl.question("What is your last name? ", (answer) => {
    lastName = answer;
    console.log(chalk.yellow(`Thanks, ${firstName} ${lastName}`));

    rl.question("What city do you live in? ", (answer) => {
      city = answer;
      console.log(chalk.yellow(`Nice, I always wanted to visit ${city}!`));

      rl.question("Where was the last place you travelled to? ", (answer) => {
        travel = answer;
        console.log(
          chalk.yellow(`${travel} is a nice place to take vacation!`)
        );

        rl.question("What is your favorite hobby? ", (answer) => {
          hobbies = answer;
          console.log(chalk.yellow(`Oh cool! ${answer} sounds interesting!`));

          rl.question("What is your favorite Movie? ", (answer) => {
            favoriteMovie = answer;
            console.log(chalk.yellow(`Your favorite movie is ${answer}`));
            rl.question("What is your favorite food? ", (answer) => {
              favoriteFood = answer;

              console.log(
                chalk.yellow(`${answer} is good. That is making me hungry!`)
              );
              console.log(chalk.green("****************************"));
              console.log(chalk.green("Generated Profile:"));
              console.log(chalk.green("----------------------------"));
              console.log(
                chalk.red(
                  `My name is ${firstName} ${lastName}. I live in the city ${city}. My absolute favorite hobby is ${hobbies} and my favorite movie is ${favoriteMovie}. My favorite food is ${favoriteFood}, I just can't seem to get enough of it! The last place I travelled to was ${travel}, it was amazing!`
                )
              );

              rl.close();
            });
          });
        });
      });
    });
  });
});
