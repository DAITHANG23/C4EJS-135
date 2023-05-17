let a = 10;
let b = 15;

console.log("a là: ",a);
console.log("b là: ",b);
console.log("a + b bằng: ",a+b);

{
    let a = prompt("Nhập vào số a:");
    let b = prompt("Nhập vào số b:");
    let c = prompt("Nhập vào số c:");
    // const sum = a + b;
    // console.log(`${a} + ${b}  =  ${sum}` );
    //   const a = 10;
    // const b = 5;
    let sum = a + b;
    let absub = a - b;
    let muti = a * b;
    let divide = a/b;
    let floor = a%b;
    let luythua = a**c;
    let CanA = Math.sqrt(a);
    let CanB = Math.sqrt(b);
    console.log("Can bậc 2 của "+ a +" la "+ CanA);
    console.log("Can bậc 2 của "+ b +" la "+ CanB);
    console.log("Tong "+ a+" + "+b+" bằng "+`${sum}`);
    console.log("Hieu "+ a + " - "+ b +" bằng "+ absub);
    console.log("Tich "+ a + " * "+ b +" bằng "+ muti );
    console.log("Chia lay phan nguyen "+ a + " / "+ b +" bằng "+ divide);
    console.log("Chia lay phan du "+ a + " % "+ b +" bằng "+ floor);
    console.log("Luy thua  "+ a + " ** "+ c +" bằng "+ luythua);
}

// block scope

const greeting ="Hello Mindx, I am a Software Engineer";
let x = 10;
console.log(greeting);
console.log("x=", x);
let y =5;

{
    const greeting = "Hôm nay là mùng 13 tết";
    console.log(greeting);
    {
        
        console.log("x=", x);
        const greeting = "Ngày mai là mùng 14 tết";
        
        
        console.log("y=", y);
        
        console.log(greeting);
    }
    console.log("y=", y);
}



/* NGÀY THÁNG NĂM NHUẬN */

    let month= Number(prompt("Nhập tháng:"));
    let year = Number(prompt("Nhập năm:"));
    // let month = 3;
    // let year = 4002;
    
    switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        result = "31";       
            break;
    case 2:
        if((year % 400 ===0) || (year % 4 === 0 && year % 100 !==0) ) {
            result = "29";
        }      else {
            result = "28";
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:   
        result = "30";
        break;     
        default:
        result = 0;
    }

    console.log(`Tháng ${month} có ${result} ngày`);

    function calculateSumFromToN(n) {
  let sum = 0;
  let index = 1;
  while (index <= n) {
    sum += index;
    index += 1;
  }

  console.log(
    "Tổng từ 1 đến 100 sử dụng vòng lặp while la:",
    calculateSumFromToN(100)
  );
}