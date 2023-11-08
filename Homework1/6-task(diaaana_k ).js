function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

let num = getRandomInt(10111,10011111);

if (num < 0)
{
    console.log('you cannot enter a negative number')
}
else
{
    function getDescendInt(num)
    {
        console.log("Current number:" + " " + num)
        let numStr = num.toString();
        let numArr = numStr.split('');

        for (let i = 0; i <= numArr.length - 1; i++)
        {
            for (let j = 0; j <= numArr.length - 1; j++ )
            {
                if(numArr[j] < numArr[j+1])
                {
                    let temp = numArr[j+1];
                    numArr[j+1] = numArr[j];
                    numArr[j] = temp;
                }
            }
        }

        return numArr.join('');
    }

    let descendNum = getDescendInt(num);
    console.log(`Output number: ${descendNum}`)
}

