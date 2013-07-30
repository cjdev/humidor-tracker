/*global define, test, ok, module, $, equal, deepEqual*/

define (["thirdparty/RestSpecUtil", "thirdparty/MockHttpClient", "CigarEntryWidget"], function(restSpecUtil, mockHttpClient, makeCigarEntryWidget) {
    var specs = restSpecUtil(undefined, {pathPrefix:"/rest-specs/"});
    
	/**
	 * price, country of origin
	 */
	test("app accepts user input", function(){
		// given
		//a male cigar connoisseur with a cigar
		var view = $("<div/>");
		
		// when
		// he looks at the page 
		makeCigarEntryWidget({view:view});
		
		// then
		equal(view.find("input").length, 4);
		$.each(["Type", "Brand", "Price", "Origin"], function(idx, item){
			ok(contains(view.text(), item), "Should contain " + item);
		});

		$.each(["type-field", "brand-field", "price-field", "origin-field"], function(idx, item){
			equal(view.find("input." + item).length, 1, "Should contain " + item);
		});
		
	});
	test("saving a cigar matches the wire format spec", function(){
			// given
			//  - a widget that has received some input
			var view = $("<div/>"), httpSpy, actualData, inputs, spec;
			
			spec = specs.getSpec("POST a cigar");
			
			inputs = {type:"churchill", brand:"cohiba", price:10, origin:"cuba"};
			
			httpSpy = function(data){
				actualData = data;
			};
			
			makeCigarEntryWidget({view:view, httpClient:httpSpy});
			$(view.find("input.type-field")).val(inputs.type);
			$(view.find("input.brand-field")).val(inputs.brand);
			$(view.find("input.price-field")).val(inputs.price);
			$(view.find("input.origin-field")).val(inputs.origin);

			view.appendTo($("body"));
			
			// when
			view.find("button").click();
			
			// then
			deepEqual(actualData.body, spec.request.representation.asJson);
			deepEqual(actualData.url, spec.url);
	});

	test("When user presses 'submit', the client sends the data", function(){
		var inputs = [
			{type:"churchill", brand:"cohiba", price:10, origin:"cuba"},
			{type:"slim", brand:"cigarello", price:1, origin:"sweat shop"}
		];
		
		$.each(inputs, function(idx, inputs){
			// given
			//  - a widget that has received some input
			var view = $("<div/>"), httpSpy, actualData;
			
			httpSpy = function(data){
				actualData = data;
			};
			
			makeCigarEntryWidget({view:view, httpClient:httpSpy});
			$(view.find("input.type-field")).val(inputs.type);
			$(view.find("input.brand-field")).val(inputs.brand);
			$(view.find("input.price-field")).val(inputs.price);
			$(view.find("input.origin-field")).val(inputs.origin);

			view.appendTo($("body"));
			
			// when
			view.find("button").click();
			
			// then
			//  - the client sends the data
			deepEqual(actualData, {
				url:"/api/cigars",
				method:"POST",
				body:{
					type:inputs.type,
					brand:inputs.brand,
					price:inputs.price,
					origin:inputs.origin
				}
			});
			ok(contains(view.text(), "Saveeee It!"));
		});
	});
	
	function contains(text, stuff){
		return text.indexOf(stuff) >= 0;
	}
});
