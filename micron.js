if( !µ ) var µ = {
    isNumber: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    isJSON: function(str) {
        try { JSON.parse(str); } catch (e) { return false; } return true;
    },

    arrayCompare: function(array1, array2, strict) {
        if (!array1 || !array2)
            return false;

        if (arguments.length == 1)
            strict = true;

        if (array1.length != array2.length)
            return false;

        for (var i = 0; i < array1.length; i++) {
            if (array1[i] instanceof Array && array2[i] instanceof Array) {
                if (! µ.arrayCompare(array1[i],array2[i], strict) )
                    return false;
            }
            else if (strict && array1[i] != array2[i]) {
                return false;
            }
            else if (!strict) {
                return µ.arrayCompare(array1.sort(),array2.sort(), true);
            }
        }
        return true;
    }

};

