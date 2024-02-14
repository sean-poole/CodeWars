/* Simple Encryption #1 - Alternating Split */

/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
    count = 1;
    while (text && count <= n) {
        let odds = text.split("").filter((e, i) => i % 2 !== 0).join("");
        let evens = text.split("").filter((e, i) => i % 2 == 0).join("");
        text = odds + evens;
        count++;
    }

    return text;
}

function decrypt(encryptedText, n) {
    let count = 1;
    while (encryptedText && count <= n) {
        let mid = encryptedText.length / 2;
        let odds = encryptedText.slice(0, mid);
        let evens = encryptedText.slice(mid);
        let result = [];

        for (let i = 0; i < Math.ceil(mid); i++) {
            result.push(evens[i], odds[i]);
        }

        encryptedText = result.join("");
        count++;
    }

    return encryptedText;
}

// Test: 
// console.log(encrypt("This is a test!", 0))
// console.log(encrypt("This is a test!", 1))
// console.log(encrypt("This is a test!", 2))
// console.log(encrypt("This is a test!", -1))

// console.log(decrypt("This is a test!", 0))
// console.log(decrypt("hsi  etTi sats!", 1))
// console.log(decrypt("s eT ashi tist!", 2))
// console.log(decrypt("This is a test!", -1))

// console.log(encrypt("", 0))
// console.log(encrypt(null, 0))
// console.log(decrypt("", 0))
// console.log(decrypt(null, 0))
