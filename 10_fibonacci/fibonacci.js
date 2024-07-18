const fibonacci = function(val) {
    if (val == 1)
        return 1
    if (val == 0)
        return 0

    return fibonacci(val - 1) + fibonacci(val - 2)
};

// Do not edit below this line
module.exports = fibonacci;
