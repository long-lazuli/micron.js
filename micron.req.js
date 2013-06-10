//if( !µ ) var µ = {};

µ.req = function req(requestName) {
	// Put the requestName in LowerCase.
	requestName = requestName.toLowerCase();

	//	Contains Arrays of request
	var param = {},
	//	load or reload an Array
		load = function ( requestName ){
			var sRequestName = null;
			switch( requestName ){
				case 'get':
					sRequestName = location.search.substring( 1, location.search.length );
					break;
				case 'hash':
					sRequestName = location.hash.substring( 1, location.hash.length );
					break;
			}
			if(sRequestName)
				param[requestName] = _parseKeyValue(sRequestName);
		},
	//	Parse strings into Array
		_parseKeyValue = function( sParams ){
			var aParsed = {},
				aParams = sParams.split("&");

			for (var i = aParams.length - 1; i >= 0; i--) {

				if( aParams[i].indexOf("=") !== -1 ){
					var key = aParams[i].substring(0, aParams[i].indexOf("=") ),
						value = aParams[i].substring(aParams[i].indexOf("=")+1, aParams[i].length);
				}else{
					var key = aParams[i],
						value = null;	
				}

				aParsed[key] = value;

			};

			return aParsed;
		};

	//	Make sure to load the params	
	if( !param[requestName] && requestName ){
		load(requestName);
	}

	// return loaded params
	return param[requestName];

};

/*	// Exemples :
	console.log( µ.req('GET') );
	console.log( µ.req('HASH')	);
*/