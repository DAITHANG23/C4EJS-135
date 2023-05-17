/* Bài 22 Giả sử bạn có một object lưu trữ thông tin của các học sinh đến từ nhiều quốc gia khác nhau dưới dạng key-value pairs như sau: Hãy viết một function nhận vào `name` của một người trong `**GUEST_LIST**` và trả về như sau:

- "Hi! I'm [name], and I'm from [country]."
- Nếu `name` **không tồn tại** trong  `**GUEST_LIST**` , return: :   "Hi! I'm a guest." */

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }

  
function greeting(nameItem){
    let country ="";
    let nameOfGuest = GUEST_LIST.hasOwnProperty(nameItem);
    
    if(nameOfGuest === false){
        return " Hi! I'm a guest." ;
    } 
    if (nameItem === "Randy"){
        country = GUEST_LIST.Randy;
    } else if(nameItem === "Karla"){
        country = GUEST_LIST.Karla;
    } else if(nameItem === "Wendy"){
        country = GUEST_LIST.Wendy;
    } else if(nameItem === "Norman"){
        country = GUEST_LIST.Norman;
    } else{
        country = GUEST_LIST.Sam;
    }    
    
    return `Hi! I'm ${nameItem}, and I'm from ${country}.`
    
}

console.log(greeting("Randy"));
console.log(greeting("Sam"));
console.log(greeting("Alex"));