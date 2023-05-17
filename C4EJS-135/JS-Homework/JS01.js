/* Bài 1 Viết chương trình in ra các số từ 1 đến 100 */

function PrintOfDigits(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = i;
        console.log(result);
    }
    return result;
}
PrintOfDigits(100);