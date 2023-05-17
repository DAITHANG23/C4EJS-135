/*  Bài 5

Số hoàn hảo. Số hoàn hảo là số mà tổng các ước của nó bằng chính nó (trừ chính nó). Viết chương trình nhập vào 1 số và kiểm tra xem đó có phải số hoàn hảo hay không?

Ví dụ 1: số 12 

- Số 12 có các ước là: 1, 2 , 3, 4, 6
- Tổng các ước 1+2+3+4+6= 16 ⇒ không là số hoản hảo ⇒ return false

Ví dụ 2: số  6 

- Số 6 có các ước là: 1, 2 , 3
- Tổng các ước là 1+2+3=6 ⇒ Là số hoàn hảo ⇒ return true */

function isPerfectNumber(n) {
    let sohoanhao = true;
    let result = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            result = i;
            sum = sum + result;
            console.log(i);
        }
        if (sum === n) {
            sohoanhao = true;
        } else {
            sohoanhao = false;
        }
    }
    return sohoanhao;
}

console.log(isPerfectNumber(10)) //-> false
console.log(isPerfectNumber(28)) //-> true
console.log(isPerfectNumber(496)) //-> true