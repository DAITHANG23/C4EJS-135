// Bài 2: Viết một Javascript function, đếm số lượng các vowels trong một chuỗi Biết rẳng **`vowels = { 'e' , 'u', 'o' ,'a' ,'i'}`** Mỗi `test case` đúng: `5 points` **Input**: Một string**Output**: Số lượng vowels (có xử lý ngoại lệ)

function countVowels(str){
    if(typeof(str)==="number"){
        return "Dữ liệu đầu vào không hợp lệ!!!";
    }
    
    let result =0;
    let vowels = ['e' , 'u', 'o' ,'a' ,'i'] ;
	for(let i = 0; i <str.length; i++){
       for(let j = 0; j< vowels.length; j++){
            if(str[i] === vowels[j]){
                result++;
                // console.log(result);
            }
        }
        
    }
    return result;
}


console.log(countVowels('anhyeuem'));//→ 4
console.log(countVowels('Viet Nam vo dich. Malaysia tuoi gi :))')); //→ 13
console.log(countVowels('')); //→ 0
console.log(countVowels('Javascript is a beautiful programming language')); //→ 17
console.log(countVowels(123)); //→ "Dữ liệu đầu vào không hợp lệ!!!"
