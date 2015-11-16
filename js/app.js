
(function(){ 
	var app = angular.module('store',[]); 

	app.controller('StoreController', function(){
		this.products = gems;
	});




	var gems = [
	{ 
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: true,
		specification: 'asdfasdfsdf',
		review: 'ddddd',
	
	},

	{ 
		name: 'smellypie',
		price: 2.98,
		description: '. . .',
		canPurchase: true,
		specification: 'xxxxx',
		review: 'ggggg',
	},

	{ 
		name: 'turdoku',
		price: 125.95,
		description: '. . .',
		canPurchase: true,
		specification: 'afffff',
		 review: 'qqqqqqq',
	},
 ];

app.controller('PanelController', function(){
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
	});
 
})();

