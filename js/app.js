var model
$(document).ready(function(){        
	
	// Get DinnerModel function
	model = new DinnerModel();
	
	// Confirm Dish button
	// Should add info to list to show in sideview. Need DIV data from click
	$('#confirmDish').click(function(){
		
		//Confirm pushes to list for sideview info
		// NOT FINISHED / usable
		confirmedDish.push(name.name);
		console.log(confirmedDish);

	});

	// Sideview List
	var confirmedDish = [];
	
	// All recipes 
	var allRecipes = model.getAll();
	
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
		

		$(".main1view2").append('<div class=" col-xs-6  main1-view2-dish "><h2>' + oneRecipe.name + '</h2><img class="icon" src="./images/' + oneRecipe.image + '"><h4>' + oneRecipe.description + '</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');
		$(".main1view2").append('<div class=" col-xs-6  main1-view2-ingr "><h3>' + oneRecipe.ingredients + '</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');
		$(".main1view2").append('<div class=" col-xs-6  main1-view2-prep "><h3>'+oneRecipe.type +'</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');
			
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
 		$('.start-page, .main1view1, .main2').hide();
	});
});