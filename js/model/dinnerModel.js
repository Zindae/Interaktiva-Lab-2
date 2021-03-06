//DinnerModel Object constructor DATA
var DinnerModel = function() {
	
	// *************OBSERVER *************//
	
	this.subscribers = [];
	
	this.subscribe = function (fn) {
		this.subscribers.push(fn);
		// console.log('this.subscribers:', this.subscribers);
		//console.log('fn:', fn);
		//console.log('0 subscriber:', this.subscribers[0]);
	};

	this.update = function (x) {
		var i, 
			max = this.subscribers.length;

		for (i = 0; i < max; i += 1) {
			//console.log('x update', x);
			this.subscribers[i](x);
		}
		// console.log('subs', this.subscribers);
	};

	
	//******** BIGOVEN ********//
	
	this.singleRecipe = [];
	//console.log(this.singleRecipe);
	
	//console.log('singleRecipe,before', singleRecipe);
	
	this.fetchRecipe = function (id) {
		var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
		// var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
		var url = "http://api.bigoven.com/recipe/" + id + "?api_key="+apiKey;
		var that = this; // that is meant to reference 'this' within [$.ajax]-scope
		this.singleRecipe = [];
		$.ajax({
			async: false,
			type: "GET",
			dataType: 'json',
			cache: true,
			url: url,
			success: function (data) {
				that.singleRecipe.push(data);
				//console.log('data', data);
				that.update(data);
			}
		});
	}
	

	this.storeSearch = [];
	//console.log('1', this.storeSearch);

	this.getRecipe = function(kw) {
        var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
        // var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                  + kw
                  + "&api_key="+apiKey;
		var that = this; // that is meant to reference 'this' within [$.ajax]-scope
		this.storeSearch = [];
        $.ajax({
			async: true,
            type: "GET",
            dataType: 'json',
            cache: true,
            url: url,
            success: function (data) {
				correct = data["Results"];
				that.storeSearch.push(correct);
				that.update(correct);
				}
			});
	}
	


	// this.searchRecipe = function (kw) {
		// var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
		// var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&api_key="+apiKey;
		// var element = this;
		// $.ajax({
			// async: true,
			// type: "GET",
			// dataType: 'json',
			// cache: false,
			// url: url,
			// success: function (data) {
				// console.log(data);
				// correct = data["Results"];
				// storeSearch.push(correct);
				// console.log('2', correct);
			// }
		// });
	// }
	
	//******** END ********//
	
	
	// dishToDisplay is a simple variable to store for usage in selection-view.
	var dishToDisplayInDishView;
	
	var numberOfGuests = 1;	
	
	
	//***** SEARCH FUNCTION VARIABLE******//
	var searchDish;
	
	this.setSearchDish = function(fn){
		searchDish = fn;
	}
	
	this.getSearchDish = function() {
		//console.log(searchDish);
		return searchDish;
	}
	//***** SEARCH END ******//
	
	
	//***** FILTER VARIABLES *****//
	
	var filterType = 'all dishes';
	
	this.setFilterType = function(filter) {
		filterType = filter;	
		console.log(filterType);
	}
	
	this.getFilterType = function(){
		return filterType;
	}
	
	// Functions to store a variable for selection-view.
	this.setDishID = function(id){
		dishToDisplayInDishView = id;
	};
	
	this.getDishID = function() {
		return dishToDisplayInDishView;
	};
	
	
	// Global menu for choice of food.
	this.menu = [];

	// Number of guests variable in sideview.
	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
	}

	
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}


	// Adds together all ingredients cost => price cost for one dish.
	this.getDishPrice = function(dish,guests) {
		
		// var price = 1;
		var len = dish['Ingredients'].length;


		// return price;
		return len * guests;
	};

	// Adds together all chosen dishes cost.
	this.getTotalMenuPrice = function() {
		var total = 0; 
		for (i in this.menu) {
			total += this.getDishPrice(this.menu[i]);
		}
		return total;
	}
	
	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found; // WORKS
	  });	
	}


	// Returns dish object of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];  // WORKS
			}
		}
	}
	
	// Returns array with recipe objects
	this.getAll = function () {
		for(i in dishes)
			return dishes;  // WORKS
	}
	
	
	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	
	var dishes = [{
		/*DISH 1 of 10*/
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},/*DISH 2 of 10*/{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},/*DISH 3 of 10*/{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},/*DISH 4 of 10*/{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},/*DISH 5 of 10*/{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 6 of 10*/{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 8 of 10*/{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},/*DISH 9 of 10*/{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},/*DISH 10 of 10*/{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
	
 ////////////////////////////////////
		},/*DISH 10 of 10*/{
		'id':204,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		
		},/*DISH 7 of 10*/{
		'id':105,
		'name':'MD 5',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':106,
		'name':'MD 6',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':108,
		'name':'MD 8',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':109,
		'name':'MD 9',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':110,
		'name':'MD 10',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':111,
		'name':'MD 11',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':112,
		'name':'MD 12',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':113,
		'name':'MD 13',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':114,
		'name':'MD 14',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},/*DISH 7 of 10*/{
		'id':115,
		'name':'MD 15',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		}
	];
}
