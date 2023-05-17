// Bài 26: ### Kiểm tra 1 chuỗi có phải là chuỗi Palindrome hay không Palindrome là một từ hoặc một cụm từ mà khi ta đọc xuôi hoặc đọc ngược thì nó cũng như vậy, ví dụ từ moom, racecar
// Nếu:- Là chuỗi Palindrome ⇒ Return true
// - Không là chuỗi Palindrome ⇒ Return false

function Palindrome(str){
    let newstr="";
    if(str===" "){
        return false;
    }
    for(let i = str.length - 1; i>=0;i--){
        newstr += str[i];
    }
    if(newstr === str){
        return true;
    }else{
        return false;
    }
}

console.log(Palindrome("racecar"));
console.log(Palindrome("moom"));
console.log(Palindrome(" "));