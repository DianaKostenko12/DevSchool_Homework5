class Vector{
    constructor(arr) {
        this.Array = arr;
    }

    add(obj) {
        let newArray = [];
        let isEqual;
        for (const key in obj)
        {
            isEqual = Array.isArray(obj[key]) && this.Array.length === obj[key].length
        }
            if(isEqual)
            {
                for (let i = 0; i < this.Array.length; i++)
                {
                    newArray.push(this.Array[i] + obj.Array[i])
                }
            }
            else
            {
                throw new Error("Vectors must have the same length");
            }
        return new Vector(newArray);
    }

    subtract(obj) {
        let newArray = [];
        let isEqual;
        for (const key in obj)
        {
            isEqual = Array.isArray(obj[key]) && this.Array.length === obj[key].length
        }
        if(isEqual)
        {
            for (let i = 0; i < this.Array.length; i++)
            {
                newArray.push(this.Array[i] - obj.Array[i])
            }
        }
        else
        {
            throw new Error("Vectors must have the same length")
        }
        return new Vector(newArray);
    }

    dot(obj) {
        let multiply = 0;
        let isEqual;
        for (const key in obj)
        {
            isEqual = Array.isArray(obj[key]) && this.Array.length === obj[key].length
        }
        if(isEqual)
        {
            for (let i = 0; i < this.Array.length; i++)
            {
                multiply += (this.Array[i] * obj.Array[i]);
            }
        }
        else
        {
            throw new Error("Vectors must have the same length")
        }
        return multiply;
    }

    norm() {
        let result = 0;
            for (let i = 0; i < this.Array.length; i++)
            {
                result += this.Array[i] * this.Array[i];
            }

        return Math.sqrt(result);
    }


    toString() {
        return `(${this.Array.join(',')})`;
    }

    equals(other) {
        if (this.Array.length !== other.Array.length) {
            return false;
        }
        return this.Array.every((value, index) => value === other.Array[index]);
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).toString());
console.log(a.subtract(b).toString());
console.log(a.dot(b));
console.log(a.norm());
try {
    console.log(a.add(c));
}
catch (Error)
{
    console.log("Vectors must have the same length")
}
