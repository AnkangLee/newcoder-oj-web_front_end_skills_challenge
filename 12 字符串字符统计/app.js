function count(str) {
    var inputs = str.replace(/\s/g, '').split('');
    return inputs.reduce(function(prev, next) {
        prev[next] = prev[next] + 1 || 1;
        return prev;
    }, {})
}
