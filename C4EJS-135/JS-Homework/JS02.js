//////////////////////////////////////////////////

/* Bài 2 Viết chương trình in ra màn hình các số từ 100 đến 1*/

function PrintReverseOfDigits(num) {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result = i;
        console.log("In số từ 100 đến 1:", result);
    }
    return result;
}
PrintReverseOfDigits(100);