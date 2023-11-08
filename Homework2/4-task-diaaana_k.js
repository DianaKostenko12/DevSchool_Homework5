function unpackSausages(truck) {
    let sausagesCounter = 0;
    let output = "";

    for (const box of truck) {
        for (const package of box) {
            if (package.startsWith("[") && package.endsWith("]") && (package.length - 2) % 4 === 0) {
                let validPackage = true;
                for (let i = 1; i < package.length - 1; i++) {
                    if (package[i] !== package[1]) {
                        validPackage = false;
                        break;
                    }
                }

                if (validPackage) {
                    sausagesCounter++;
                    if (sausagesCounter % 5 !== 0) {
                        output += package.slice(1, -1).split('').join(' ') + " ";
                    }
                }
            }
        }
    }

    return output.trim();
}

const truck = [
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IlII]"],
    ["IuI", "[))))]", "x"],
    []
];

const result = unpackSausages(truck);
console.log(result);
