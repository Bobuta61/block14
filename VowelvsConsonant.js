// create code that will use lowercase letters only.
// The output to the console.log should include the string being searched
//  and how many consenants and vowels are within the set

// const string = "hello"

// const count = string => {

// let vowel = 0;
// let consonant = 0;

// for (let i = 0; i <string.length; i++) {
//     let element = string[i];

//   if (ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u')

//   vow += 1;
//   else
//   cons += 1;

//   };

//   console.log(`${string}`);
//   console.log(`${vow} vowels present`);
//   console.log(`${cons} consonants are present.`);

// };

// const string = "hello";

// let vowels = ["a", "e", "i", "o", "u"];
// let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

// for (let i = 0; i < string.length; i++) {
//     if (string[i] === "a", "e", "i", "o", "u") {
//         count += 1;

//     if (string[i] === "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z")
//         count += 1;
//     }
// }

// console.log(string, count);

// Instruction from Byron

// const testString = "hellow has 3 consonants and 2 vowels";

// const letters = "ae";

// let aeLetters = 0;
// let others = 0;

// for(let i = 0; i < testString.length; i++){

//     if(letters.indexOf(testString[i].toLowerCase()) !== -1) {
//         aeLetters += 1;
//     } else if (testString[i] !== " ") {
//         others += 1;
//     }
// }

// console.log(aeLetters);
// console.log(others);

// const myString = "hello";

// const vowels = "aeiou";

// let aeiouLetters = 0;
// let others = 0;

// for(let i = 0; i < myString.length; i++){

//     if(vowels.indexOf(myString[i].toLowerCase()) !== -1) {
//         aeiouLetters += 1;
//     } else if (myString[i] !== " ") {
//         others += 1;
//     }
// }

// console.log(myString + " has "  + others +  " consonants" + " and " + aeiouLetters + " vowels");

// const myString = "ukelele";

// const vowels = "aeiou";

// let aeiouLetters = 0;
// let others = 0;

// for(let i = 0; i < myString.length; i++){

//     if(vowels.indexOf(myString[i].toLowerCase()) !== -1) {
//         aeiouLetters += 1;
//     } else if (myString[i] !== " ") {
//         others += 1;
//     }
// }

// console.log(myString + " has "  + others +  " consonants" + " and " + aeiouLetters + " vowels");

// const myString = "awesome";

// const vowels = "aeiou";

// let aeiouLetters = 0;
// let others = 0;

// for(let i = 0; i < myString.length; i++){

//     if(vowels.indexOf(myString[i].toLowerCase()) !== -1) {
//         aeiouLetters += 1;
//     } else if (myString[i] !== " ") {
//         others += 1;
//     }
// }

// console.log(myString + " has "  + others +  " consonants" + " and " + aeiouLetters + " vowels");

// const myString = "onomonopia";

// const vowels = "aeiou";

// let aeiouLetters = 0;
// let others = 0;

// for(let i = 0; i < myString.length; i++){

//     if(vowels.indexOf(myString[i].toLowerCase()) !== -1) {
//         aeiouLetters += 1;
//     } else if (myString[i] !== " ") {
//         others += 1;
//     }
// }

// console.log(myString + " has "  + others +  " consonants" + " and " + aeiouLetters + " vowels");

const myString = "textbook";

const vowels = "aeiou";

let aeiouLetters = 0;
let others = 0;

for(let i = 0; i < myString.length; i++){

    if(vowels.indexOf(myString[i].toLowerCase()) !== -1) {
        aeiouLetters += 1;
    } else if (myString[i] !== " ") {
        others += 1;
    }
}

console.log(myString + " has "  + others +  " consonants" + " and " + aeiouLetters + " vowels");

