

function calculatePhoneBill(n) {
    let total = 0;
    let result = 0;
    let phibatbuoc=25000;
    if (n <= 0) {
        console.log("Wrong!");
    } else {
        if (n >= 201) {
            total = (n - 200) * 200 + (n - 50) * 400 + 50 * 600;
        } else if (n >= 51) {
            total = (n - 50) * 400 +  50 * 600;
        } else {
            total = n * 600;
        }
    }
    result = total + phibatbuoc;
    return result;  
}
console.log("Tổng tiền điện thoại là:",calculatePhoneBill(123));



  