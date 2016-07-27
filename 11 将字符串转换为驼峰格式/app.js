function cssStyle2DomStyle(sName) {
    return sName.replace(/\-[a-z]/g, function(a, index) {
        return index == 0 ? a.replace('-', '') : a.replace('-', '').toUpperCase();
    })
}
