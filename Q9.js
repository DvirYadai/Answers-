let n1;
let n2;
let n3;
for(let i = 100; i <=999; i++){
    let numString = i.toString();
    n1 = Number(numString[0]);
    n2 = Number(numString[1]);
    n3 = Number(numString[2]);
    if((Math.pow(n1,3) + Math.pow(n2,3) + Math.pow(n3,3)) === i){
        console.log(i);
    }
}
