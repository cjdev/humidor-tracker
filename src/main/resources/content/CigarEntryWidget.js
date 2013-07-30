/*global define */

define(["SpecialHttpClient"], function(SpecialHttpClient){
	return function(options){
		
		var httpClient = options.httpClient || SpecialHttpClient;

		options.view.append(
				'<div>' + 
					'<div>Type<input class="type-field"/></div>' + 
					'<div>Brand<input class="brand-field"/></div>' + 
					'<div>Price<input class="price-field" /></div>' + 
					'<div>Origin<input class="origin-field"/></div>' + 
					'<button>Saveeee It!</button>' + 
				'</div>');
		
		options.view.find("button").click(function(){
			httpClient({
				"url": "/api/cigars",
				"method":"POST",
				"body": {
					"type": options.view.find(".type-field").val(),
					"brand": options.view.find(".brand-field").val(),
					"price":parseInt(options.view.find(".price-field").val(), 10),
					origin:options.view.find(".origin-field").val()
				}
			});
			
		});
	};
});
