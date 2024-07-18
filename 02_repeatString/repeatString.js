const repeatString = function(givenStr, num) {
    let str = "";
    for (let i = 1; i <= num; i++){
        str += givenStr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
