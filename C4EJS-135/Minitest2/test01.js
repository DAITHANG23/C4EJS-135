// Bài 1
let result = "";
let newresult = "";
function fizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result = "FizzBuzz";
            newresult += result;
        } else if (i % 5 === 0) {
            result = "Buzz";
            newresult += result;
        } else if (i % 3 === 0){
            result = "Fizz";
            newresult += result;
        }else{
            result = "";
            newresult += result;
        }
    }
    return newresult;
}

console.log(fizzBuzz()) //→ FizzBuzzFizzFizzBuzzFizzFizzBuzz
