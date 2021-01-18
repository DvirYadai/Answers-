let num1 = 336;
let num2 = 360;
let smallest = num1 < num2 ? num1 : num2;
let greatest = 1;
for(let i = 1; i < smallest; i++){
    if(num1 % i === 0 && num2 % i === 0){
        greatest = i;
    }
}
console.log(greatest);
