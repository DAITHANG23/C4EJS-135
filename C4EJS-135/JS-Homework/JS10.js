/* Bài 10: Viết một function, xóa một phần tử bất kì trong mảng */
function remove(array, position) {
    let first = array.slice(0, position);
    let last = array.slice(position + 1, array.lenngth);

    return first.concat(last);
}
my_array = [10, -5];
console.log(remove(my_array, 1));