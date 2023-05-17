/*  Bài 13: Outlier Number

Cho một mảng một chiều, trong đó tất cả các phần tử của mảng đều là số chẵn hoặc tất cả đều là số lẻ. Ngoại trừ duy nhất một số khác biệt (outlier number). Hãy viết một hàm để tìm ra số khác biệt đó

Notes: Độ dài của mảng: `array.length ≥ 3`*/

function outlierNumber(array) {
    let result = 0;
    let evennumber = 0;
    let oddnumber = 0;
    let e = 0;
    let o = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evennumber = array[i];
            e++;

        } else {
            oddnumber = array[i];
            // console.log(oddnumber);
            o++;
            // console.log(o);
        }

    }
    if (e > o) {
        result = oddnumber;


    } else if (e < o) {
        result = evennumber;

    }

    return result;
}

console.log(outlierNumber([2, 3, 4]));
console.log(outlierNumber([1, 2, 3]));
console.log(outlierNumber([4, 1, 3, 5, 9]));