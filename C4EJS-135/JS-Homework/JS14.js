/* Bài 14 Viết một hàm, kết quả trả về là một mảng bao gồm các phần tử khác biệt từ 2 mảng cho trước */

function difference(arr1, arr2) {
	let arr = []
	// let result = 0;
	let totalArr = arr1.concat(arr2);
	totalArr = totalArr.sort(function (a, b) { return a - b });
	console.log(totalArr);
	arr= totalArr.filter((item, index) => totalArr.indexOf(item) === index);
	return arr;

}
console.log(difference([1, 2, 3], [100, 2, 1, 10,2,3,10,100]));
//["1", "2", "3", "10", "100"]
// difference([1, 2, 3], [100, 2, 1, 10]);