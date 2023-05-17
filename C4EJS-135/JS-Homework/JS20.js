/* Bài 20 Viết hàm nhận vào một object và trả về một mảng 2 chiều như sau: */     

function keysAndValues(object){
    let new_array_key = [];
    let new_array_value = [];
    let newArray = [];
    let array = [];
    for(let key in object){
        new_array_key.push(key);
        console.log(new_array_key);
        new_array_value.push(object[key]);
        console.log(new_array_value);
    
    }

    newArray = new_array_key.concat(new_array_value);
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < newArray.length; j++){
            array += newArray[j];
            continue;
        }
    }

    return array;
     
 }

 