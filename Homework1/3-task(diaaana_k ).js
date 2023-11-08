console.log(`Given volume: 4183059834009`)
function findNb(m)
{
    let n = 1;
    let volume = 0;

    while(volume < m)
    {
        volume += n * n * n;
        n++
    }

    return volume === m ? n - 1 : -1;
}

let result = findNb(4183059834009);
console.log(result);
