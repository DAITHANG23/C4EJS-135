/* Bài 1: 
Nhập vào tuổi và giới tính của một người để đưa ra quyết định người đó có phải nhập ngũ hay không biết 
rằng tuổi nhập ngũ từ  đủ 18-27 và giới tính nhập ngũ là Nam */


let render = "Nam";//Giới tính
let yearbirth = 2024;
let year = 2023;

let old = year - yearbirth;

if(render !== "Nam"){
    console.log("Không phù hợp nhập ngũ");
} else{
    if(old < 0){
        console.log("Lỗi");
    } else if(old >= 18 && old <= 27){
        console.log("Đủ điều kiện nhập ngũ");
    } else {
        console.log("Không đủ điều kiện nhập ngũ");
    }
}
