function strLength(s, bUnicode255For1) {
    var len = s.length;
    if (!bUnicode255For1) {
        for (var i = 0; i < len; i++) {
            if (s.charCodeAt(i) > 255) {
                len++;
            }
        }
    }
    return len;
}
