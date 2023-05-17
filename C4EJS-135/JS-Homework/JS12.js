/* Bài 12

Viết một **`function`,** với dữ liệu đầu vào là một mảng một chiều ⇒ trả về một mảng mới bao gồm `**kiểu dữ liệu(data type)**` của từng phẩn tử trong mảng */

function arrayValuesTypes(array) {
    let new_array = [];
    let result;
    for (let i = 0; i < array.length; i++) {
        result = typeof (array[i]);
        new_array.splice(i,0,result);
    }
    
    return new_array;
}

// typeof(variable) => kieu du lieu

console.log(arrayValuesTypes([1, 2, "null", []]));
// ➞ ["number", "number", "string", "object"]

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
//➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
//➞ ["number", "string", "string", "object", "object", "boolean", "number"]