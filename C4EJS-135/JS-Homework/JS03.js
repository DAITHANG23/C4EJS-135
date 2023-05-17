/* Bài 3 Viết chương trình in ra màn hình các số chia hết cho 5 trong khoảng từ 5 đến 70 */

function DividedOfDigits(num) {
    let result = 0;
    for (let i = 5; i <= num; i++) {

        if (i % 5 === 0) {
            result = i;
            console.log(result);
        }
    }
    return result;
}

DividedOfDigits(70);