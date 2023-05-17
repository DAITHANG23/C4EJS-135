function sumOfDigitalNumber(num){
    let result = 0;
    while(num>0){
        let phandu = num % 10;
        result = result + phandu;
        num = Math.floor(num /10) ;
    } 
    return result;
}
console.log(sumOfDigitalNumber(12345));
console.log(sumOfDigitalNumber(123456789));
