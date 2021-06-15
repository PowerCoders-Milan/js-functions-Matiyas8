// define a function that will check if I can vote or not
const canIVote = age => {
    // define a variable legalAge
    const legalAge = 18;
    // create if else statement that console.log() if you can vote or not
    if (age > legalAge) {
        console.log("you can vote!!");
    } else {
        console.log("you can not vote!!");
    }
}
// define a variable for your age

// call the function and see if you can vote


canIVote(30)

console.log("*****")

canIVote(14)