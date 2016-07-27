function rgb2hex(sRGB) {

    var result;

    function toHex(n) {
        return n < 16 ? '0' + (+n).toString(16) : (+n).toString(16);
    }

    sRGB.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g, function(a, r, g, b) {
        if (r > 255 || g > 255 || b > 255) return;
        result = '#' + toHex(r) + toHex(g) + toHex(b);
    });

    return result || sRGB;

}
