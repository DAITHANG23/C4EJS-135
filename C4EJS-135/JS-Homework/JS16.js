/* Bài 16: Cho một mảng một chiều. Viết các hàm số thỏa mãn các yêu cầu sau đây:

- Tìm phần tử nhỏ nhất trong mảng
- Tìm phẩn tử lớn nhất trong mảng */

function findMinElemnet(array){
    let min = array[0];

    for(let i =1; i < array.length; i++){
        if(array[i] < min ){
            min = array[i];
        }       
    }
    return min;
}

console.log(findMinElemnet([1,2,-10,100,-8,7]));
console.log(findMinElemnet([10,9,8,7,6,6,7,10]));
console.log(findMinElemnet([-1]));


function findMaxElement(array){
    let max = array[0];

    for(let i =0; i < array.length; i++){
        if(array[i] > max ){
            max = array[i];
        }       
    }
    return max;
}
console.log(findMaxElement([1,2,-10,100,-8,7]));
console.log(findMaxElement([10,9,8,7,6,6,7,10]));
console.log(findMaxElement([-1]));