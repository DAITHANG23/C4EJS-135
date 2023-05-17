/* Bài 9 Viết một function  , chèn phần tử vào một vị trí bất kì trong mảng */

function insert(array, position, value) {
    let first = array.slice(0, position);
    let last = array.slice(position, array.length);

    first.push(value);
    return first.concat(last);
}

var my_array = [10, -5, 6, 8, 7]

console.log(insert(my_array, 1, 100));
console.log(insert(my_array, 5, 10000));
console.log(insert(my_array, 0, 8888));