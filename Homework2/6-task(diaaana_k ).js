function totalLandPerimeter(arr) {
    let totalPerimeter = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                if (i === 0 || arr[i-1][j] === 'O') totalPerimeter++;
                if (i === arr.length - 1 || arr[i+1][j] === 'O') totalPerimeter++;
                if (j === 0 || arr[i][j-1] === 'O') totalPerimeter++;
                if (j === arr[i].length - 1 || arr[i][j+1] === 'O') totalPerimeter++;
            }
        }
    }

    return `Total land perimeter: ${totalPerimeter}`;
}


const example1 = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'XXXOO'
];

const example2 = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
];

console.log(totalLandPerimeter(example1));
console.log(totalLandPerimeter(example2));
