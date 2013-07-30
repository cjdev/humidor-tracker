var require = {
		paths:{
			jquery:"thirdparty/jquery"
		},
		shim: {
			"thirdparty/HttpClient": {
				exports: 'HttpClient',
				deps: ['jquery']
			},
			"thirdparty/MockHttpClient": {
				exports: 'MockHttpClient',
				deps: ['jquery']
			},
			"thirdparty/RestSpecUtil":{
				exports:'RestSpecUtil',
				deps: ['jquery', "RestSpec"]
			}
		}
};