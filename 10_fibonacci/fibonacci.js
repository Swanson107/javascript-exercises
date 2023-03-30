const fibonacci = function(num) {
    if (num < 0){return "OOPS"}
    num = parseInt(num);
    let n1 = 0;
    let n2 = 1;
    let fib = [1];
    for (let i = 0; i <= num; i++){
        result = n1 + n2;
        fib.push(result);
        n1 = n2;
        n2 = result;

    }
    result = fib[num - 1];
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
