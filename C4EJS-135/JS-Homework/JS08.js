/* Bài 8 `homework`

Viết chương trình nhập vào số n và tính trung bình cộng các số ước chẵn của n. Lưu ý kết quả làm tròn 2 chữ số thập phân */

function countAverageOfEvenDivisor(n) {
    let result = 0;
    let j = 0;
    let sum = 0;
    let countAverage = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            result = i;
            console.log("biến i: ", i);
        } else {
            continue;
        }
        if (result % 2 === 0) {
            sum += result;
            console.log("Tổng là:", sum);
            j++;
            console.log("số lần: ", j);
        }
    }
    countAverage = sum / j;
    let total = countAverage.toFixed(2);
    return total;
}
console.log(countAverageOfEvenDivisor(6)) // -> 1.33
console.log(countAverageOfEvenDivisor(12)) // -> 2.00
console.log(countAverageOfEvenDivisor(20)) // -> 1.80