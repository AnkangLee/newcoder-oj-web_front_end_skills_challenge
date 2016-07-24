function fibonacci(n) {
    var result = [0, 1];
    for (var i = 2, j = n; i <= j; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result[n]
}
