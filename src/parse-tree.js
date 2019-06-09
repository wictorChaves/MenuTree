function ParseTree(base) {

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    }

    function removeObjs(filhos) {
        filhos.forEach(function (filho) {
            base = arrayRemove(base, filho);
        });
    }

    function ObterPorTopMenu(topMenu) {
        return base.filter(function (obj) {
            return obj.topMenu === topMenu
        });
    }

    base.forEach(function (value) {
        var filhos = ObterPorTopMenu(value.id);
        value.subItems = filhos;
        removeObjs(filhos);
    });

    return base;
    
}


