// Cách 1:
// const image = document.querySelector(".bulboff-container img");

// function turnOff() {
//     image.src = "./image/pic_bulboff.gif";
// }

// function turnOn() {
//     image.src = "./image/pic_bulbon.gif";

// }


// Cách 2: 

function toggleBubble(status) {
    const image = document.querySelector(".bulboff-container img");
    switch (status) {
        case 'off':
            image.src = "./image/pic_bulboff.gif";
            return;
        case 'on':
            image.src = "./image/pic_bulbon.gif";
            return;
        default:
            return;
    }
}
const button_turn_light = document.querySelectorAll(".bulboff-buttons button");

for (let i = 0; i < button_turn_light.length; i++) {
    const buttons = button_turn_light[i];
    buttons.style.marginLeft = "24px";
    buttons.style.padding = "12px";
    buttons.style.borderRadius = "8px";
    buttons.style.border = "none";
    buttons.style.background = "blueviolet";
    buttons.style.color = "white";
    buttons.style.cursor = "pointer";
    buttons.style.fontSize = "16px";
    buttons.style.fontFamily = "'Poppins', sans-serif";

}

// Homework 02: Register

const contentregisterCourse = document.querySelector(".content-register p");
contentregisterCourse.style.fontFamily = "'Poppins', sans-serif";
const registerCourse = document.querySelector(".button-register button");

registerCourse.style.padding = "12px";
registerCourse.style.borderRadius = "8px";
registerCourse.style.fontSize = "16px";
registerCourse.style.fontFamily = "'Poppins', sans-serif";
registerCourse.style.cursor = "pointer";

const newContent = ` Chúc mừng bạn đã đăng ký khóa học thành công `;

function buttonRegister() {

    contentregisterCourse.innerHTML = newContent;
    document.querySelector(".button-register button").disabled = true;
    contentregisterCourse.style.color = "red";

}


// Homework 03: Log in





function buttonInform() {
    const account = "admin";
    const password = "admin123";

    let valueAccount = document.querySelector(".account input").value;
    let valuePassword = document.querySelector(".password input").value;

    // const pAccount= document.createElement("p");
    // // const pPassword = document.createElement("p");
    // const formlogin = document.querySelector(".homework03 .form");
    // pAccount.innerHTML = valueAccount;
    // // pPassword.innerHTML = valuePassword;
    // // formlogin.appendChild(pPassword);
    //         formlogin.appendChild(pAccount);

    if (valueAccount === account && valuePassword === password) {
        alert("Bạn đã đăng nhập thành công");
    } else {
        alert("Bạn đã đăng nhập thất bại, mời đăng nhập lại!")
    }
}

// Bài 4


let inform = document.querySelector(".inform");
let result = 0;

function buttonPay() {
    let x = document.getElementById("mySelect").selectedIndex;
    let tipStaff = (document.getElementsByTagName("option")[x].value);

    const num2 = document.querySelector(".member input").value;// số người dạng string
    const num1 = document.querySelector(".total-bill input").value;// tiền bill dạng string
    let totalBill = +num1; // đổi thành number
    let member = +num2; // đổi thành number

    // Phần xét điều kiện tip
    if (tipStaff === "low") {
        result = ((totalBill + totalBill * 0.05) / member).toFixed(2);
    } else if (tipStaff === "medium") {
        result = ((totalBill + totalBill * 0.1) / member).toFixed(2);
    } else if (tipStaff === "good") {
        result = ((totalBill + totalBill * 0.2) / member).toFixed(2);
    } else {
        result = ((totalBill) / member).toFixed(2);
    }

    var resultBill = Number(result);// chuyển thành number
    resultBill = resultBill.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    // phần hiển thị
    if (totalBill <= 0) {
        inform.innerHTML = "Xin vui lòng nhập tổng bill !";

    } else if (member <= 0) {
        inform.innerHTML = "Xin vui lòng nhập số người !";
    } else {
        inform.innerHTML = "Mỗi người cần phải trả là: ";
        const moneyBill = document.querySelector(".money-bill");
        moneyBill.innerHTML = `${resultBill}`;
    }

}

function resetform() {

    // document.querySelector(".pay-bill").reset();
    document.querySelector(".member input").value = "";
    document.querySelector(".total-bill input").value = "";
    const moneyBill = document.querySelector(".money-bill");
    moneyBill.innerHTML = "";
    inform.innerHTML = "";
    let x = document.getElementById("mySelect").selectedIndex;
    document.getElementsByTagName("option")[x].value = "";
}

// bài 5



let Result = 0;


function calculate() {
    const add = document.getElementById("add");
    const min = document.getElementById("min");
    const mul = document.getElementById("mul");
    const devi = document.getElementById("devi");
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);


    const inform = document.querySelector(".notice p");
    const isMissingchecked = !(add.checked) && !(min.checked) && !(mul.checked) && !(devi.checked);
    let calculate = add.checked || min.checked || mul.checked || devi.checked;

    switch (calculate) {
        case add.checked:
            Result = num1 + num2;
            break;
        case min.checked:
            Result = num1 - num2;
            break;
        case mul.checked:
            Result = num1 * num2;
            break;
        case devi.checked:
            Result = (num1 / num2).toFixed(2);
            break;
        default:
            break;
    }

    // if (add.checked) {
    //     Result = num1 + num2;

    // } else if (min.checked) {
    //     Result = num1 - num2;

    // } else if (mul.checked) {
    //     Result = num1 * num2;

    // } else if (devi.checked) {
    //     Result = (num1 / num2).toFixed(2);

    // } else {
    //     Result = "";
    // }


    if (document.getElementById("number1").value === "") {
        inform.innerHTML = "Xin vui lòng nhập số thứ 1!";
        document.querySelector("#result").value = "";

    } else if (document.getElementById("number2").value === "") {
        inform.innerHTML = "Xin vui lòng nhập số thứ 2!";
        document.querySelector("#result").value = "";

    } else if (isMissingchecked) {
        inform.innerHTML = "Vui lòng chọn phép tính!";

    } else if(!num2 && devi.checked ){
        inform.innerHTML = "Không thể chia cho 0";
        document.querySelector("#result").value = "";
    } else {
        inform.innerHTML = "";
        document.querySelector("#result").value = `${Result}`;

    }
}

function reset() {
    document.querySelector("#result").value = "";
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.querySelector(".notice p").innerHTML = "";
    const add = document.getElementById("add");
    const min = document.getElementById("min");
    const mul = document.getElementById("mul");
    const devi = document.getElementById("devi");
    add.checked = false;
    min.checked = false;
    mul.checked = false;
    devi.checked = false;

}