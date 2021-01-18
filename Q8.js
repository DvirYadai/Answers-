function toDigit(num){
    let arr = [];
    while(num > 0){
        if(((num % 10)) !== 0){
            arr.unshift((num % 10));
        }
        num = Math.floor(num / 10);
    }
    return arr;
}

function happyNumber(num){
    let arrNumbers = toDigit(num);
    let tempSum = 0;
    for(let i = 0; i < arrNumbers.length; i++){
        tempSum += (arrNumbers[i]**2);
    }
    let arrChack = [];
    while(tempSum !== 1){
        arrNumbers = toDigit(tempSum);
        arrChack.push(tempSum);
        tempSum = 0;
        for(let i = 0; i < arrNumbers.length; i++){
            tempSum += (arrNumbers[i]**2);
        }
        for(let j = 0; j < arrChack.length; j++){
            if(tempSum === arrChack[j])
                return false;
        }
    }
    if(tempSum === 1){
        return true; 
}
}

let count = 0;
for(let i = 1; count < 5; i++){
    if (happyNumber(i)){
        count++;
        console.log(i);
    }
}
