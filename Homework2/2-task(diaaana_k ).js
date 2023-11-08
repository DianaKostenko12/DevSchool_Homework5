let inputArray = [1,100,50,-51,1,1];
let foundIndex = -1;

for (let i = 0; i < inputArray.length; i++)
{
    let sum1 = getArraySum(inputArray,0,i);
    let sum2 = getArraySum(inputArray,i+1,inputArray.length);
    if(sum1 === sum2)
    {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    console.log(foundIndex);
} else {
    console.log(-1);
}

function getArraySum(array, firstNum, lastNum)
{
    let partOfArray = array.slice(firstNum,lastNum);
    if(partOfArray.length === 0)
    {
        return  0;
    }
    else{
        return  partOfArray.reduce((sum, current) => sum + current, 0)
    }
}