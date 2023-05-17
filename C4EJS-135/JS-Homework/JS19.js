/* Bài 19 Viết hàm nhận vào hai điểm, và trả về khoảng cách của 2 điểm
    Biết rằng: x (hoành độ), y(tung độ) */
    function getDistance(pointA, pointB) {
        const distance = Math.sqrt(
          (pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2
        );
            let result = distance.toFixed(3);
        return result;
      }
      console.log(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 })); // ➞ 6.325
      
      console.log(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 })); // ➞ 1.414
      
      console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 })); //➞ 21.095   