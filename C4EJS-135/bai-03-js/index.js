/*Bài 3: 

Input: Ngày / tháng sinh của một người bất kỳ.

Output: Cung hoàng đạo của người đó
*/

/* 
Cung Bạch Dương (Aries): 21/03 – 20/04
Cung Kim Ngưu (Taurus): 21/04 – 21/05
Cung Song Tử  (Gemini): 22/05 – 21/06
Cung Cự Giải (Cancer): 22/06 – 22/07
Cung Sư Tử (Leo): 23/07 – 21/08
Cung Xử Nữ (Virgo): 22/08 – 23/09
Cung Thiên Bình (Libra): 24/09 – 23/10
Cung Thiên Yết (Scorpion): 24/10 – 22/11
Cung Nhân Mã (Sagittarius): 23/11 – 22/12
Cung Ma Kết (Capricorn): 23/12 – 20/01
Cung Bảo Bình (Aquarius): 21/01 – 19/02
Cung Song Ngư (Pisces): 20/02 – 20/03
*/


let month = Number(prompt("Nhập tháng sinh: "));
let borndate = Number(prompt("Nhập ngày sinh: "));
// let month = 1; // tháng sinh
// let borndate = 15; // ngày sinh

{
    if(month <= 0 || month > 12){
        console.log("Nhập lại tháng sinh!");
    }else{
        switch (month) {
            case 1:
                if (borndate === 21 || borndate === 22 || borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30 || borndate === 31) {
                    result = "Cung Bảo Bình";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20) {
                    result = "Cung Ma Kết";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 2:
                if (borndate === 20 || borndate === 21 || borndate === 22 || borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29) {
                    result = "Cung Song Ngư";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19) {
                    result = "Cung Bảo Bình";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 3:
                if (borndate === 21 || borndate === 22 || borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30 || borndate === 31) {
                    result = "Cung Bạch Dương";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20) {
                    result = "Cung Song Ngư";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 4:
                if (borndate === 21 || borndate === 22 || borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30) {
                    result = "Cung Kim Ngưu";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20) {
                    result = "Cung Bạch Dương";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 5:
                if (borndate === 22 || borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30 || borndate === 31) {
                    result = "Cung Song Tử";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21) {
                    result = "Cung Kim Ngưu";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 6:
                if (borndate === 22 || borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30) {
                    result = "Cung Cự Giải";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21) {
                    result = "Cung Song Tử";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 7:
                if (borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30 || borndate === 31) {
                    result = "Cung Sư Tử";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21 || borndate === 22) {
                    result = "Cung Cự Giải";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 8:
                if (borndate === 22 || borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30 || borndate === 31) {
                    result = "Cung Xử Nữ";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21) {
                    result = "Cung Sư Tử";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 9:
                if (borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30) {
                    result = "Cung Thiên Bình";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21 || borndate === 22 || borndate === 23) {
                    result = "Cung Xử Nữ";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 10:
                if (borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30 || borndate === 31) {
                    result = "Cung Thiên Yết";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21 || borndate === 22 || borndate === 23) {
                    result = "Cung Thiên Bình";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            case 11:
                if (borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30) {
                    result = "Cung Nhân Mã";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21 || borndate === 22) {
                    result = "Cung Thiên Yết";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                breRONG
            case 12:
                if (borndate === 23 || borndate === 24 || borndate === 25 || borndate === 26 || borndate === 27 || borndate === 28 || borndate === 29 || borndate === 30 || borndate === 31) {
                    result = "Cung Ma Kết";
                } else if (borndate === 1 || borndate === 2 || borndate === 3 || borndate === 4 || borndate === 5 || borndate === 6 || borndate === 7 || borndate === 8 || borndate === 9 || borndate === 10 || borndate === 11 || borndate === 12 || borndate === 13 || borndate === 14 || borndate === 15 || borndate === 16 || borndate === 17 || borndate === 18 || borndate === 19 || borndate === 20 || borndate === 21 || borndate === 22) {
                    result = "Cung Nhân Mã";
                } else {
                    console.log("WRONG!");
                    result = "...";
                }
                break;

            default:
                break;
        }
    }
}
    
console.log(`Cung hoang đạo là ${result}`); //Xuất kết quả
