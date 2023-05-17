/* Bài 11 Cho mảng một chiều bao gồm các số nguyên, hãy viết hàm tính các số chẵn trong mảng */

function sumOfEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number % 2 === 0) {
            sum = sum + number;
        }
    }

    return sum;
}
console.log(sumOfEvenNumbers([]));
console.log(sumOfEvenNumbers([-1, 1, 2]));
console.log(sumOfEvenNumbers([0, 9, 2, 8, 10, -6, 100]));