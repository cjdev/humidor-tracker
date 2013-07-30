/*global define, JSON*/
define(["jquery"], function($){
	return function(opts){
		$.ajax({
			url:opts.url,
			type:opts.method,
			data:JSON.stringify(opts.body)
		});
	};
});