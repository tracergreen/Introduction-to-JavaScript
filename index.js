/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 34;
console.log(votingAge > 18); //true

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var faveFood = 'pizza';
faveFood = 'sushi';
console.log(faveFood); //sushi

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999")); //1999

//Task d: Write a function to multiply a*b 

var a = 2;
var b = 8;
var c = a * b;
console.log(c); // 2 * 8 = 16 

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAge(age) {
  return age * 7;
}

dogAge(34); // returns 34*7 = 238

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder (weight,age) {
  if (age >= 1) {
    if (weight <= 5) {
        console.log(weight*.05);
    } else if (weight < 10) {
        console.log(weight*.04);
    } else if (weight <= 15) {
        console.log(weight*.03);
    } else if (weight > 15) {
        console.log(weight*.02);
    }
  } else {
    if (age <= .33) {
      console.log(weight*.1);
    } else if (age <= .58) {
      console.log(weight*.05);
    } else if (age > .59) {
      console.log(weight*.04);
    }
  }
}
dogFeeder(15,1) // returns weight 0.44999999999999996 for 15 lbs, 1 year old, per example

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var myNum = prompt("rock, paper, or scissors?"); //enter your choice here
var ranNum = Math.random();
if (ranNum <0.34){
    ranNum = "paper";
}else if(ranNum <=0.67){
    ranNum = "rock";
}
else{
    ranNum = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "You win!";
        }
        else{
            return "You lose, try again!";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "You win!";
        }
        else{
            return "You lose, try again";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "You lose, try again";
        }
        else{
            return "You win!";
        }
    }
};
compare(myNum,ranNum);  //tests your choice against the random number and returns the answer

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const mile = 8
const km = 1.60934

let mileage = (km*mile);
console.log(mileage); //8mi is equal to 12.87472km

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

const foot = 5
const cm = 30.48

let measure = (foot*cm);
console.log(measure); //5ft is 152.4cm

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(count) {
  for (counter = count; counter >= 1; counter = counter - 1) {
    let bottles;
    if (counter == 1) {
      bottles = 'bottle'; //changes bottles to bottle when the count reaches 1
    } else {
      bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of pop on the wall,");
    if (counter < count) {
        console.log(""); //gives space between verses
        console.log(counter+" "+bottles+" of pop on the wall.");
    }
    console.log(counter+" "+bottles+" of pop.");
    console.log("Take one down, pass it around");
    if (counter == 1) {
      console.log("No bottles of pop on the wall! :("); //ends the verses when the counter equals 1
    }  
    }
  }
  annoyingSong(99) //all 99 verses

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function grade(mark) {
  if (mark < 60) {
    return "F";
  } else if (mark < 70) {
    return "D";
  } else if (mark < 80) {
    return "C";
  } else if (mark < 90) {
    return "B";
  } else {
    return "A";
  }
}
grade(85); //returns B because the mark is less than 90 but greater than 80

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


