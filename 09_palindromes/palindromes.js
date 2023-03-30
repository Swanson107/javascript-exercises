const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    let array1 = string.split("");
    let array2 = array1.reverse();
    newString = array2.join("");
    if (newString.split("").reverse().join("") == newString){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
