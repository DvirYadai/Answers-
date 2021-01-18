let num1 = 2;
let num2 = 5;
let num3 = -6;
if ((num1 > num2 && num1 > num3) && (num2 > num3)) {
    alert (num1 + ", " + num2 + ", " + num3);
} else if ((num1 > num2 && num1 > num3) && (num3 > num2)) {
    alert (num1 + ", " + num3 + ", " + num2);
    }

if ((num2 > num1 && num2 > num3) && (num1 > num3)) {
    alert (num2 + ", " + num1 + ", " + num3);
} else if ((num2 > num1 && num2 > num3) && (num3 > num1)) {
    alert (num2 + ", " + num3 + ", " + num1);
    } 
  
if ((num3 > num2 && num3 > num1) && (num1 > num2)) {
    alert (num3 + ", " + num1 + ", " + num2);
} else if ((num3 > num2 && num3 > num1) && (num2 > num1)) {
    alert (num3 + ", " + num2 + ", " + num1);
    } 