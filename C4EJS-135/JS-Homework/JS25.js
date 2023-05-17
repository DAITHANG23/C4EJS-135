// Bài 25: ### `Interview Question` Reversing letters and words Đảo ngược từ thành các từ có nghĩa:

// - **Input: `"I evol uoy os !hcum"`**
// - **Output**:  **`" I love you so much!"`**

function reverseWordInString(str){
    let newString = "";
    let strItem = str.split(" ");
    
    console.log(strItem);
    for(let i = 0; i < strItem.length; i++){
        let item = strItem[i] + " ";
        for(let j = item.length -1; j>=0 ; j--){
            newString += item[j];
            // newString.join(" ");
        }
         
    }
    
    return newString;
}

console.log(reverseWordInString("I evol uoy os !hcum"));

const removeUselessSpaceFromString = (str) => {
    // Convert về mảng một chiều
    const words = str.trim().split(" ");
    const validWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      const isValidWord = Boolean(word); // true/false
  
      if (isValidWord) {
        validWords.push(word);
      }
    }
  
    const validStr = validWords.join(" ");
    return validStr;
  };
  
  const testCase1 = "          Hello";
  const testCase2 = "Hello    ";
  const testCase3 = "       Hello  World 123      321   ";
  const testCase4 = "Valid string";
  
  console.log("Test case 1:", testCase1);
  console.log("Test case 1 clean:", removeUselessSpaceFromString(testCase1));
  console.log("\n------------------\n");