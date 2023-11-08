class VigenereCipher {
    constructor(key, abc) {
        this.key = key;
        this.abc = abc;
    }

    encode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (this.abc.includes(char)) {
                let keyChar = this.key[i % this.key.length];
                let shift = this.abc.indexOf(keyChar);
                let index = (this.abc.indexOf(char) + shift) % this.abc.length;
                let encryptedChar = this.abc[index];
                result += encryptedChar;
            } else {
                result += char;
            }
        }
        return result;
    }

    decode(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (this.abc.includes(char)) {
                let keyChar = this.key[i % this.key.length];
                let shift = this.abc.indexOf(keyChar);
                let index = (this.abc.indexOf(char) - shift + this.abc.length) % this.abc.length;
                let decryptedChar = this.abc[index];
                result += decryptedChar;
            } else {
                result += char;
            }
        }
        return result;
    }
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = 'password';
let c = new VigenereCipher(key, alphabet);

console.log(c.encode('codewars'));
console.log(c.decode('laxxhsj'));
console.log(c.encode('CODEWARS'));
