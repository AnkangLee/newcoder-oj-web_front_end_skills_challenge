Array.prototype.uniq = function() {

    if (Array.from && window.Set) {
        return Array.from(new Set(this)); // return _.uniq(this)  使用lodash或者underscore库
    } else {
        var result = [];
        var flag = true;

        for (var i = 0; i < this.length; i++) {
            if (result.indexOf(this[i]) == -1) {
                if (this[i] != this[i]) { //排除 NaN
                    if (flag) {
                        result.push(this[i]);
                        flag = false;
                    }
                } else {
                    result.push(this[i]);
                }
            }
        }
        return result;

    }

}
