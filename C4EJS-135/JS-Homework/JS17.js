/* Bài 17

Cho mảng một chiều **`arr`,** hãy viết các hàm thõa mãn các yêu cầu sau:

- Tạo mảng `oddArr` chỉ chứa các số lẻ từ mảng **`arr`**
- Tạo mảng `eventArr` chỉ chứa các số chẵn từ mảng `arr`
- Tạo mảng `distinctArr` chỉ chứa các số phân biệt từ mảng `arr` */

function oddArr(array){
    let result = 0;
    let new_array =[];
    for( let i = 0; i < array.length; i++){
        if( array[i] % 2 !== 0){
            result = array[i];
            new_array.splice(i, 0, result);
        }
    }
    return new_array;
}

console.log(oddArr([1,2,3,4,5,6,7,8,9]));
console.log(oddArr([10,-8,0,2]));
console.log(oddArr([1,3,-10,6,5]));

function eventArr(array){
    let result = 0;
    let new_array =[];
    for( let i = 0; i < array.length; i++){
        if( array[i] % 2 === 0){
            result = array[i];
            new_array.splice(i, 0, result);
        }
    }
    return new_array;
}
  
console.log(eventArr ([1,2,3,4,5,6,7,8,9]));//➞ [2,4,6,8]
console.log(eventArr ([10,-8,0,2])); //➞ [10,0,-2]
console.log(eventArr ([1,3,-10,6,5])); //➞ [-10,6]

function distinctArr(array){
    let value = array[0];
    let result = 0;
    let new_array = [];
    new_array.splice(0, 0, value);
    array.sort(function(a,b) {return a-b})
    // console.log(array);

    // for( let i = 1; i < array.length; i++){
    //     if(array[i] === value){
    //         value = array[i-1];
    //         result = value;
            
    //     } else {
    //         value = array[i];
    //         result = value;
    //         new_array.splice(i, 0, result);
    //     }
    // }

    new_array = array.filter((item, index) => array.indexOf(item) === index);
    return new_array;
}

console.log(distinctArr([2,2,2,3,3,3]));
console.log(distinctArr([2,4,4,4,6,6,7,1,6,2,3]));
console.log(distinctArr([1,3,4,5]));