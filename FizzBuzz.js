// Create javaScript code that prints each number from 1 to 100 in for statement
// Each multiple of 3, print "Fizz" instead of number using if statement
// Each mulitple of 5, print "Buzz" instead of the number using if statement
// If it is a mulitple of both 3 & 5, print "FizzBuzz" instead of the number using if statement




for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

    console.log("FizzBuzz" + " ");
}

    else if (i % 3 === 0) {

        console.log("Fizz");
    }

    else if (i % 5 === 0) {

        console.log("Buzz");
    }

}