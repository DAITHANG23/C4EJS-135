
// /* Tính tổng các số từ 1 đến n */
// function calculateSumFromToN(n) {
//     let sum = 0;
//     let index = 1;
//     while (index <= n) {
//       sum += index;
//       index += 1;
//     }
//     return sum;
    
//   }
//   console.log("Tổng từ 1 đến 100 sử dụng vòng lặp while la:",calculateSumFromToN(100));

// /* Tính tổng các số của 1 số tự nhiên*/

// function calculateSumOfDigits(num) {
//     let result = 0;
//     while (num > 0) {
//         const temp = num % 10;
//         result += temp;
//         num = Math.floor(num / 10);
//     }
//     console.log("Tong la:", result);

//     return result;
// }
// console.log(calculateSumOfDigits(10238)); // 14
// console.log(calculateSumOfDigits(11223301)); // 14
// console.log(calculateSumOfDigits(45)); // 9

// /* Tìm ước số */

// function calculateDivisorofDigits(num){
//   let result = 0;

//   for(let i = 0; i <= num ; i++){
//     if(num % i === 0){
//       result = i;
//       console.log(result);
//     }
//   }
//     return result;
// }

// console.log(calculateDivisorofDigits(10))

// /* Tìm bội số */

// function calculateMutipleOfDigits(num){
//   let result2 = 0;

//   for(let i = 0; i<= (num * 20) ; i++){
//     if(i % num === 0){
//       result2 = i;
//       console.log(result2);
//     }
//   }
//   return result2;
// }


// console.log(calculateMutipleOfDigits(2));

/* tính số nguyên tố */
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(let x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(`có phải là số nguyên tố: `+test_prime(6));

// /* Tính tổng số chẵn*/
// // const nums = [10, 20, -5, 8, 7, 6, 3];

// // function FindSumOfEvenNumber(nums){
// //   let sum =0;
// //   let lengthnums = length.nums
// //   for (i=0; i<)

// // }


// function getTotalSalary(employees){
//       let salaryofemployee = employees.salary;
      
// }

// let Result = 0;
// const num1 = 1;
// const num2 = 10;
// for(let i = num1; i <= num2; i++ ){
//   for(let j = 2; j < i; j++){
//       if(i % j !== 0){
//         Result = i;
//         console.log(Result);
//       }
//   }
// }
// let Result = 0;
// let totalResult = 0;
// let num1 = 4;
//     let num2 =13;
    
//     if (num1 ===1 )
//     {
//         Result = 1;
//         // totalResult = Result;
//     }
//     else if(num1 === 2)
//     {
//       Result = 2;
//       // totalResult = Result;
//     }else
//     {
//       for( num1 ; num1 <= num2; num1++)
//       {
//         if(num2 % num1 === 0)
//         {
//           Result = 0;
//         }
//       }
//       console.log(num1);
//       Result = num1; 
//       totalResult += Result;
      
//       console.log(totalResult);
//     }

let num1 = 3;
let num2 = 10;
