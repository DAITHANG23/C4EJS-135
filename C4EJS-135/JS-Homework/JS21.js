/* Bài 21 Viết một hàm, để xác định xem đơn đặt hàng này có đủ điểu kiện để miễn phí giao hàng hay không. Miễn phí khi và chỉ khi:

- Tổng chi phí của các mặt hàng ≥ $50.00 */

function freeShipping(object){
    let sum = 0;
    for(let key in object){
        sum += object[key];
    }
    if(sum > 50){
        return true;
    } else {
        return false;
    }
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));