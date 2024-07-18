const palindromes = function (str) {
    let revStr = str.split("").reverse().join("");

    for (let i = 0; i <= str.length; i++){
        if (str.charAt(i) != revStr.charAt(i))
            return false;
        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
