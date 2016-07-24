function namespace(oNamespace, sPackage) {
    var packs = sPackage.split('.');
    var temp = oNamespace;
    for (var i = 0, depth = packs.length; i < depth; i++) {
        var prop = temp[packs[i]];
        if (!prop || typeof prop !== 'object') {
            temp[packs[i]] = {};
        }
        temp = temp[packs[i]];
    }
    return oNamespace;
}
