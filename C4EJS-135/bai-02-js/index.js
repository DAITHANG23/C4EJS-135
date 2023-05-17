/* Bài 2: 

Viết một đoạn code thực hiện tính thuế thu nhập cá nhân của một người biết rằng:

1. 11 triệu đầu tiên của lương không phải chịu thuế
2. Với mỗi 5 triệu tiếp theo phải chịu tương ứng 5%, 10%, 15%, 20% ~ 35% thuế. (Mức thuế cao nhất phải chịu là 35%)
3. Sau khi tính được khoản thuế phải đóng, hãy tính phần lương còn lại sau khi đóng thuế. */

/*
11tr: 0%
12tr-16tr : 5%;
17tr-21tr : 10%;
22tr-26tr : 15%;
27tr-31tr : 20%;
32tr- ... : 35%
*/
let salary = Number(prompt("Nhập lương: ")); //Lương
let result = 0; // Thuế thu nhập
let netsalary = salary - result; //Lương sau khi trừ thuế
if(salary <= 0){
    console.log("Nhập lương lỗi");
    result = "";
    netsalary = "";
} else{
    if(salary <= 11000000){
        result = 0;
    } else if(salary >= 31000000){
        result =(salary - 31000000) * 0.35 + 5000000 *(0.2 + 0.15 + 0.1 + 0.05)
    } else if(salary >= 26000000){
        result =(salary - 26000000) * 0.2 + 5000000 *(0.15 +0.1 + 0.05)
    } else if(salary >= 21000000){
        result =(salary - 21000000) * 0.15 + 5000000 *(0.1 + 0.05)
    } else if(salary >= 16000000){
        result =(salary -16000000) *0.1 + 5000000 * 0.05
    } else{
        result =(salary - 11000000) * 0.05
    }
}
    
    console.log("Income Personal Tax: " + result + " Đồng");
    console.log("Net Salary: "+ netsalary + " Đồng");

