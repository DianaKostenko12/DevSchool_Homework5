function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let num = getRandomInt(-1000,1000);
console.log(num);

function getLogicalValue(num)
{
    if(num < 2)
    {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        if (num % i === 0)
            return false;
    }
    return true;
}

let isPrime = getLogicalValue(num);
console.log(isPrime);
