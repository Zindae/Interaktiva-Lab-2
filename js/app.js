$(document).ready(function(){        
	var model	
	// Get DinnerModel function
	model = new DinnerModel();
	
	// Sideview List
	var confirmedDish = [];
	
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
		
		for(i = 0; i < len; i++){
			var ingredients = oneRecipe.ingredients[i];
			$(".main1view2info").append('<div class=" col-xs-2  main1-view2-ingr ">' + ingredients.quantity, ingredients.unit, ingredients.name, ingredients.price + '</div><br>');
		}
		
		$(".main1view2").append('<div class=" col-xs-6  main1-view2-dish "><h2>' + oneRecipe.name + '</h2><img class="icon" src="./images/' + oneRecipe.image + '"><h4>' + oneRecipe.description + '</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');
		


		$(".main1view2").append('<div class=" col-xs-6  main1-view2-prep "><h3>'+ oneRecipe.type +'</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');

		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
 		$('.start-page, .main1view1, .main2').hide();
	});


	// 1. START-PAGE
	// 		=> CREATE_MENU
	// start-page button on click => create menu-object
		// var model = $('#create-dinner').click(
		// 	new DinnerModel(); + CHANGE_VIEW__
		// 	);

	
	// 2. SIDE-VIEW
	// 		=> SET_NUMBER_OF_PEOPLE 
		// stepDown(), stepUp()
		// model.setNumberOfGuests = input.value
		// var inputForm = document.getElementById("myInput");
		// var inputNumber = inputForm.value;
		// $('#input').click(console.log(inputValue.value)); 
		// model.setNumberOfGuests = $('#number-of-people').value;


	// 		=> CONFIRM_DINNER
		// $('#confirm-dinner').click(function() {
		// 	if (ingaRätterIsValda) {
		//	OverView(model.menu); + CHANGE_VIEW__
		// 	} else {
		// alert("You have to choose a dish")
		// 	};
		// });
	
	// 3. SEARCH-VIEW
	// 		=> TYPE_IN_SEARCH
	$('#search').keyup(function() {
		var searchField = $('#search').val();
		var myExp = new RegExp(searchField, "i");
			var output = '<ul class="searchresults">';
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
	// 		=> CONFIRM_DISH
		// confirm dish should add the dish to the models menu-array
		// $('confirm-dish').click(addDishToMenu( theDish ));  + CHANGE_VIEW__
	
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












});