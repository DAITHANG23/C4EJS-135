// Bài 24:  `Interview Question` Viết hàm đảo ngược chuỗi mà không dùng hàm reverse() của Javascript- **Input: `"evol"`**- **Output**:  **`"love"`**

function reverseString(str){

    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];

    }
    return result;
}

console.log(reverseString("eman"));