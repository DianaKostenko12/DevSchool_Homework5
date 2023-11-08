let output = "-5 -5"
let numArr = output.split(' ').map(Number);

let numMax = numArr[0];
for (let i = 0; i < numArr.length; i++)
{
    if( numMax < numArr[i])
    {
        numMax = numArr[i];
    }
}

let numMin = numArr[0];
for (let i = 0; i < numArr.length; i++)
{
    if( numMin > numArr[i])
    {
        numMin = numArr[i];
    }
}

let outputStr = [numMax, " ", numMin].join('');
console.log(outputStr);
