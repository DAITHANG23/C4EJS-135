

function sumOfEvenNumbers(n){
    let sum = 0;
    for(let i=0 ; i<=n ; i+=2){
        sum+=i;
    }
    return sum;
}
console.log("Tổng  la:",sumOfEvenNumbers(100));

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   // sum = sum + i;
//   sum += i;
//   console.log("i=", i, " and sum = ", sum);
// }

// console.log("Tổng từ 1 đến 100 là:", sum);