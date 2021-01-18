function toDigit(num){
    let arr = [];
    let i = 1;
    while(num > 0){
        arr.unshift((num % 10) * i);
        num = Math.floor(num / 10);
        i *= 10;
    }
    return arr;
}


function happyNumber(num){
    let arrNumbers = toDigit(num);
    let tempSum = 0;
    for(let i = 0; i < arrNumbers.length; i++){
        tempSum += (arrNumbers[i]**2);
    }
    while(tempSum != 1){
        arrNumbers = toDigit(tempSum);
        tempSum = 0;
        for(let i = 0; i < arrNumbers.length; i++){
            tempSum += (arrNumbers[i]**2);
        }
    }
    if(tempSum === 1){
        return true;
    } else return false;
}