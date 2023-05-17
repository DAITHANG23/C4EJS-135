/* Bài 4: Viết chương trình nhập vào số nguyên dương n. Và đếm xem n có bao nhiêu ước số
Ví dụ:

- số 6: 1,2,3,6 ⇒ 4 ước
 */

function countDivisor(n) {
    let result = 0;
    if (n < 0) {
        result = 0;
    } else {
        for (let i = 0; i <= n; i++) {
            if (n % i === 0) {
                result++;
            }
        }
    }
    return result;
}

console.log(countDivisor(10))  //-> 4
console.log(countDivisor(128)) //-> 8
console.log(countDivisor(2000)) //-> 20
console.log(countDivisor(63)) //-> 6