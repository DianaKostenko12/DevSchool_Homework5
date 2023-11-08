function getRootProperty(obj, target) {
    for (const key in obj) {
        if (Array.isArray(obj[key]) && obj[key].includes(target)) {
            return key;
        } else if (typeof obj[key] === 'object') {
            const result = getRootProperty(obj[key], target);
            if (result !== null) return key;
        }
    }
    return null;
}

const object1 = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

console.log(getRootProperty(object1, 19))
