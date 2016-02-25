$(document).ready(function(){        
	
	var model;	
	
	model = new DinnerModel();
	
	// confirms that we can acces menu
	console.log(model.menu);

	// Sideview List
	var confirmedDish = [];
	var count = 0;
	
	// All recipes 
	var allRecipes = model.getAll();
	console.log(allRecipes);

	// Length of the array for the FOR loop
	var len = allRecipes.length;
	
	//Iterates through every recipe in dinnerModel.js
	for(i = 0; i < len; i++){
		
		// Gets specific recipe
		var outputDish = allRecipes[i];
	
		//Creates DIV with recipe info.

		$(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.id+'" ><img class="icon" src="./images/'+outputDish.image+'"><a href="#" data-toggle="popover" data-trigger="focus" title="'+outputDish.name+'" data-content="'+outputDish.description+'"><p><b>'+outputDish.name+'</b></p></a></div>');
	};

	$('.main1view1dishes').click(function(){
		
		var dishID = $(this).attr('id');
		var oneRecipe = model.getDish(dishID);
		var ingredients = oneRecipe.ingredients[0];
		var len = oneRecipe.ingredients.length;
		
		//var val = 3;


		// for(i = 0; i < len; i++){
		// 	var ingredients = oneRecipe.ingredients[i];
		// 	$(".main1view2info").append('<div class=" col-xs-2  main1-view2-ingr ">' + ingredients.quantity, ingredients.unit, ingredients.name, ingredients.price + '</div><br>');
		// }
		


		// $(".main1view2").html();

		// main1view2 col1
		$(".main1view2dishname > div").html('<div class=" col-xs-6  main1-view2-dish" id="' + dishID + '"><h2>' + oneRecipe.name + '</h2><img class="icon" src="./images/' + oneRecipe.image + '"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');

		// main1view2 col2
		// $(".main1view2ingredients > div").html('<div class=" col-xs-6  main1-view2-prep "><h3>'+ oneRecipe.type +'</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');
		$(".main1view2ingredients > div").html(function() {
			$(".main1view2ingredients > div").html('');
			for(i = 0; i < len; i++){
				var ingredients = oneRecipe.ingredients[i];
				$(".main1view2ingredients > div").append('<div class=" col-xs-12  main1-view2-ingr "><b>' + ingredients.quantity+' '+ ingredients.unit+'</b> '+ingredients.name+ ' -- '+ ingredients.price + ' SEK</div><br>');
			}
			}
		);
		
		// main1view2 col3
		$(".main1view2preparation > div").html('<div class=" col-xs-6  main1-view2-prep "><h3>Preparation</h3><h4>' + oneRecipe.description + '</h4></div>');


		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
 		$('.start-page, .main1view1, .main2').hide();



	});


	// 1. START-PAGE
	// 		=> CREATE_MENU
	// start-page button on click => create menu-object
		$('#create-dinner').click(function(){
			$('#body').css('background-color','white');
		});
		// var model = $('#create-dinner').click(
		// 	new DinnerModel(); + CHANGE_VIEW__
		// 	);
		// + make background white


	
	// 2. SIDE-VIEW
	// 		=> SET_NUMBER_OF_PEOPLE 
		// stepDown(), stepUp()
		// model.setNumberOfGuests = input.value
		// var inputForm = document.getElementById("#number-of-people");
		// var numberOfPeople = inputForm.value;
		// $('#input').click(console.log(inputValue.value)); 
		// model.setNumberOfGuests = $('#number-of-people').value;
	$('#number-of-people').change(function() {
		model.setNumberOfGuests(this.value);
		console.log(model.getNumberOfGuests());
	});
	


	// 		=> CONFIRM_DINNER // NOT FINISHED
	$('#confirm-dinner').click(function() {
		// $.each(model.menu, function(key, val) {
			// 	if (key[val] === undefined) {
			// 		alert("You have to choose three dishes.")
			// 		return 
			// 	} else {

			// 		console.log('dishes are set!')


			// 	}
			// })

		var starter = model.getDish(model.menu['starter']);
		//console.log(starter);
		var main = model.getDish(model.menu['main dish']);
		var dessert = model.getDish(model.menu['dessert']);
			// var theDiv = $.this;
			// $.each(model.menu, function(key, val) {
		$(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + starter.image + '"></div>');
		$(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + main.image + '"></div>');
		$(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + dessert.image + '"></div>');
		
		var total = model.getTotalMenuPrice(model.menu)
		$(".right").append('Totalt pris för meny = ' +total+ 'SEK');
	
	
		
	});
	
	// 3. SEARCH-VIEW
	// 		=> TYPE_IN_SEARCHmodel.
	$('#search').keyup(function() {
		var searchField = $('#search').val();
		var myExp = new RegExp(searchField, "i");
			// var output = '<ul class="searchresults">';
			$.each(allRecipes, function(key, val) {
				if (val.name.search(myExp) != -1){
					console.log(val);

					// HERE THE MATCHING ELEMENTS ARE PASSED TO SELECTION-VIEW //
					// TYP: SelectionView.update( searchResults )

					// output += '<li>';
					// output += '<h2>'+ val.name +'</h2>';
					// output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
					// output += '<p>'+ val.bio +'</p>';
					// output += '</li>';
				}
			});
			// output += '</ul>';
			
		
	});

	// 		=> SELECT_TYPE_IN_DROP_DOWN
		// First, you have a var typeSet = undefined;
		// then, if type is Set => typeSet = theType;
		// => then you create an array with each dish that has the specific type
		// then only these search results will show up in the search when you type.
		// but you have to do the type filtering before one can search...
		
	// 4. SELECTION-VIEW
	// 		=> SELECT_DISH
		// So, the div that you click's ID is passed to PrepView...
		// $('.main1view1dishes').click(function(){
		// 		var dishID = $(this).attr('id');
		// 		PrepView.(dishId); + CHANGE_VIEW__
	
	// 5. DISH-VIEW
	// 		=> GO_BACK
		// visually: go back to SelectionView  + CHANGE_VIEW__
		// shouldn't do anything else.
		// however, it depends on where the 'Pending' state should be set.
	
	// 		=> CONFIRM_DISH // WORKS
		// confirm dish should add the dish to the models menu-array
		// $('confirm-dish').click(addDishToMenu( theDish ));  + CHANGE_VIEW__

	$('#confirm-dish').click(function(){
		var dishID = $('.main1-view2-dish').attr('id');
		var oneDish = model.getDish(dishID);

		model.menu[ oneDish.type ] = oneDish.id;
		console.log(model.menu[ oneDish.type ]);
		console.log(model.menu);
		
		
		var temp = model.getDishPrice(dishID);
		$(".dish-name").append(''+oneDish.name+', ' + temp + ' SEK<br>')
		
		
		// count1 = count;
		// count = count1 + 1;		
		
		
		// console.log('count:' +count+ '');
		// if (count = 3){
			// $(".dish-name").html('')
			// count = 0
		// }
		

	})
	
	// 6. OVER-VIEW
	// 		=> GO_BACK_AND_EDIT
		// + CHANGE_VIEW__
		//
	// 		=> PRINT_FULL_RECIPE
		// $('#print-recipe').click(PrepView(model.menu));
		//   + CHANGE_VIEW__


	// 7. PREP-VIEW
	// 		=> GO_BACK_TO_OVERVIEW
		// $('#main2-go-back').click( goBackTo(OverView) );
		//   + CHANGE_VIEW__
	$('#print-recipe').click(function() {
	var starter = model.getDish(model.menu['starter']);
	var main = model.getDish(model.menu['main dish']);
	var dessert = model.getDish(model.menu['dessert']);



	$(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + starter.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"><p>Här är en text som berättar lite om maträttten du är about tilll att äta.</p></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + starter.description + '</p></div></div></div>' 
		);
	$(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + main.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"><p>Här är en text som berättar lite om maträttten du är about tilll att äta.</p></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + main.description + '</p></div></div></div>' 
		);
	$(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + dessert.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"><p>Här är en text som berättar lite om maträttten du är about tilll att äta.</p></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + dessert.description + '</p></div></div></div>' 
		);
	});



	// ###### testar modellen #######################################################################################

	TestModel = new DinnerModel();

	// testar setNumberOfGuests och getNumberOfGuests	
	TestModel.setNumberOfGuests(5);
	console.log("number of guests in TestModel are: " + TestModel.getNumberOfGuests());
	
	// testar getAll
	var allDishes = TestModel.getAll();
	console.log(allDishes);

	// testar
	var aDish = TestModel.getDish(3);
	console.log("And the dish is: " + aDish.name);


	// test get dishes by filter & type test
	var allStarters = TestModel.getAllDishes("dessert");
	$.each(allStarters, function(key, val) {
		console.log(key + ": " + val.name);
	});

	var allIngredients = TestModel.getAllIngredients();

	total = TestModel.getTotal();
	// $.each(allIngredients, function(key, val) {
	// 	// console.log(key + ": " + val);
	// 	console.log("we're in  allIngredients loop!");
	// })
	// console.log(allIngredients);

});