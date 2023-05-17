//Bài 3: Viết chương trình xóa các element trùng trong mảng**Input**: mảng 1 chiều**Output**: mảng đã được remove các phần tử trùng ["one", "one", "one", "two","two", "three", "one"] => ["one", "two","three"]

function removeDuplicateFromArray(arr){
    let value = arr[0];
    // let result ;
    let new_array = [];
    new_array.splice(0, 0, value);
    if(typeof(arr) === "string"){
        return "Dữ liệu đầu vào không hợp lệ";
        
    }
    arr.sort(function(a,b) {return a-b})
    // for( let i = 1; i < arr.length; i++){
    //     if(arr[i] === value){
    //         value = arr[i-1];
    //         result = value;
            
    //     } else {
    //         value = arr[i];
    //         result = value;
    //         new_array.splice(i, 0, result);
    //     }
    // }
    new_array = arr.filter((item, index) => arr.indexOf(item) === index);
    return new_array;
}


console.log(removeDuplicateFromArray([1,1,-1,3,5,3,10,1])); //=> [1,-1,3,5,10]
console.log(removeDuplicateFromArray([true, 3, "hello" , false, "hello", true])); //=> [true,3,"hello",false]
console.log(removeDuplicateFromArray(['a','b','c','d','d','c','a'])); //=> ['a','b','c','d']
console.log(removeDuplicateFromArray("Hello")); //=> "Du lieu dau vao khong hop le"
