var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i][1];
}
sum /= students.length
console.log (sum);
if (sum <= 100 && sum > 90)
    console.log('Grade A');
if (sum <= 90 && sum > 80)
    console.log('Grade B');
if (sum <= 80 && sum > 70)
    console.log('Grade C');
if (sum <= 70 && sum > 60)
    console.log('Grade D');
if (sum <= 60)
    console.log('Grade F');
