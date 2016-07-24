function getUrlParam(sUrl, sKey) {
    var params = sUrl.substring(sUrl.indexOf('?') + 1, sUrl.indexOf('#')).split('&');

    var oParm = params.reduce(function(prev, next) {
        var temp = next.split('=');
        var key = temp[0];
        var value = temp[1];
        if (prev[key]) {
            prev[key].push(value);
        } else {
            prev[key] = [value];
        }
        return prev;
    }, {});

    if (!sKey) {
        return oParm;
    } else {
        var result = oParm[sKey];
        if (!result) {
            return "";
        } else if (result.length > 1) {
            return result;
        } else {
            return result[0];
        }
    }
}
