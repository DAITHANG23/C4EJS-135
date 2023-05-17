/* Bài 7 `homework` Left-angled triangle

Nhập vào một số n và in ra màn hình theo định dạng sau:*/

function leftAngledTriangle(n) {
    let result = "";
  for (let i = 1; i <= n; i++) {
    // Cộng khoảng trắng
    for (let j = n - i; j >= 1; j--) {
      result += " ";
    }

    // Cộng dấu #
    for (let j = i; j >= 1; j--) {
      result += "*";
    }
    result += "\n"; // "\n" ở đây nghĩa là xuống dòng
  }
  console.log(result);
}
leftAngledTriangle(10);