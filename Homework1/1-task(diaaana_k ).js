let num = 90;

function getSumMultiples(num)
{
    if (num > 3)
    {
        let sum = 0;
        for (let i = 0; i < num; i++) {
            if ( i % 3 === 0 || i % 5 === 0)
                sum += i;
        }
        return sum;
    }
    else{
        return 0;
    }
}

let sum = getSumMultiples(num);
console.log(sum)