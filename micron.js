if( !µ ) var µ = {
	isNumber: function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},
	isJSON: function(str) {
		try { JSON.parse(str); } catch (e) { return false; } return true;
	}
};
