var model
$(document).ready(function(){        
	
	// Get DinnerModel function
	model = new DinnerModel();
	

	// Hide / Show pages
	$('#button2, #back, #main2-go-back').click(function(){
		
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
		$('.start-page, .main1view2, .main2').hide();
		
	});
	

	
	// Confirm Dish button
	// Should add info to list to show in sideview. Need DIV data from click
	$('#confirmDish').click(function(){
		
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
		$('.start-page, .main1view2, .main2').hide();
		
		//Confirm pushes to list for sideview info
		// NOT FINISHED / usable
		confirmedDish.push(name.name);
		console.log(confirmedDish);

	});

	// Sideview List
	var confirmedDish = [];
	
	// Sideview Confirm button
	$('#confirmDinner').click(function(){
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main2').show(); 
		$('.start-page, .main2view1, .main1').hide();
	});
	
	
	/////////////// MAINVIEW START //////////////
	// Function to detect click on single food course main1view1. On click, show main1view2.
	// Problem: Need either 1 view for each course or generate new views each time with clicked data.
	
	// $('.main1view1').delegate('div','click',function() {
	// 	$(".main1view2").html()
		
	// 	$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
	// 	$('.main1').show(); 
	// 	$('.start-page, .main1view1, .main2').hide();
		
	// 	//var selected_html = ed.selection.getContent();
	// 	//var $name = $elem.filter('name');
	// 	//console.log($name);
	// 	var temp1 = $('#3').attr('id');
	// 	console.log(temp1);
	// 	var name = allRecipes[temp1];
		
	// 	$(".main1view2").append('<button id="back">Back to Dishes</button>')
	// 	$(".main1view2").append('<button id="confirmDish">Confirm Dish</button>')
	// 	$(".main1view2").append('<div id="'+temp1+'" class="col-xs-2"><img class="icon" src="./images/'+name.image+'"><p><b>'+name.name+'</b></p><p>'+name.description+'</p></div>');

	// 	// $( "div" ).text( temp );
	// 	//console.log($('main1view2').get( 0  ));
	// 	//$(".main1view2").append('<div class="col-xs-2"><img class="icon" src="./images/'+name.image+'"><p><b>'+name.name+'</b></p><p>'+name.description+'</p></div>');
	
	// });
		
		
		
	// MAIN1VIEW1 page generation, get data from Dinnermodel.js.
	
	// All recipes 
	var allRecipes = model.getAll();
	// console.log(allRecipes);
	
	// Length of the array for the FOR loop
	var len = allRecipes.length;
	// console.log(len);
	
	//Iterates through every recipe in dinnerModel.js
	for(i = 0; i < len; i++){
		
		// Gets specific recipe
		var outputDish = allRecipes[i];
		// console.log(allRecipes);
		// console.log(outputDish);
	
		//Creates DIV with recipe info.

		$(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.id+'" ><img class="icon" src="./images/'+outputDish.image+'"><a href="#" data-toggle="popover" data-trigger="focus" title="'+outputDish.name+'" data-content="'+outputDish.description+'"><p><b>'+outputDish.name+'</b></p></a></div>');


		//$(".main1view1").append('<a href="#" data-toggle="popover" title="'+name.name+'" data-content="'+name.description+'">123</a>');
		// $(".main1view1").append('<div id="'+i+'" class="col-xs-2"><img class="icon" src="./images/'+outputDish.image+'"><p><b>'+outputDish.name+'</b></p></div>');

	};






	$('.main1view1dishes').click(function(){
		
		var dishID = $(this).attr('id');

		// console.log(dishID);

		// var allRecipes = model.getAll();
		
		// console.log(allRecipes);

		
		// var oneRecipe = allRecipes[dishID ]
		var oneRecipe = model.getDish(dishID);
		
		// console.log("This is dish: " + oneRecipe.name);


		$(".main1view2").append('<div class=" col-xs-6  main1-view2-dish "><h2>' + oneRecipe.name + '</h2><img class="icon" src="./images/' + oneRecipe.image + '"><h4>' + oneRecipe.description + '</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p><button>back to Select Dishes</button></div>');
		$(".main1view2").append('<div class=" col-xs-6  main1-view2-ingr "><h3>' + oneRecipe.ingredients + '</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p><button>Confirm Dish</button></div>');
		$(".main1view2").append('<div class=" col-xs-6  main1-view2-prep "><h3>'+oneRecipe.type +'</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');
			
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
 		$('.start-page, .main1view1, .main2').hide();
	});
	


// <div class="col-xs-6">
// 	<img src="images/toast.jpg">
// 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
// 	<button>back to Select Dishes</button>
// </div>
// <div class="col-xs-6">
// 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// 	<button>Confirm Dish</button>
// </div>
// <div class="clearfix"></div>
// <div class="col-xs-6">
// 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// </div>











	/////////////// MAIN1VIEW1 END //////////////
});

	

// // CONTROLLER

// $(function() {
// 	//We instantiate our model
// 	var model = new DinnerModel();
	
// 	var sideView = new sideView($(".main1sideview"));
	
// 	//And create the needed controllers and views
// 	var main1View = new main1View($(".main1 container"));

// 	var row1 = new row1($('td:row main1view1').hide();) //testkod för HIDE, "row main1view1".
		
// 	var main1view1 //Skickar info till main1view2
// 	var main1view2 //Klicka på confirm dish -> addDishToMenu i model
// 	var main2view1 //for dishes in getFullMenu för att lista upp alla valda rätter	// GetFullMenu kan man använda här.
// 		x = getFullMenu(); // om det är tre rätter
// 		for i in x:
// 			output (i.price, i.något)
// 	var main2view2 //2-2 visar bilden, ingredienserna, lorem ipsum texten.
	
// $(document).ready(function(){        
// 		// ADD SOME .css("display", "");
//         $('#button1, #button2, #button3, #button4, #button5').click(function() {        
//              switch(this.id) {
//              	case 'button1'	:
//              		// $('.start-page').show('fast');
//              		$('.main1, main2').hide('fast');
//              		break;
//              	// case 'button2':
             		
//              	// 	break;
//              	// case 'button3':
             		
//              	// 	break;
//              	// case 'button4':
             		
//              	// 	break;
//              	// case 'button5':
             		
//              	// 	break;
// 			}
//         });
//     });


// $(document).ready(function(){        
		
// 		// ==> SHOW & hide used to display each 'page'
// 		// short css 'display' reset before each hide/show in order to prevent
// 		// conflicts since hide/show is abstracted under jquery.
        
//         $('#button1, #button2, #button3, #button4, #button5').click(function() {        
             
//              switch(this.id) {
             	
//              	// start-page
//              	case 'button1'	: 
//              		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
//              		$('.start-page').show(); 
//              		$('.main1, .main2').hide();
//              		break; 
             	
//              	// main1view1
//              	case 'button2':
//              		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
//              		$('.main1').show(); 
//              		$('.start-page, .main1view2, .main2').hide();
//              		break; 
             		
//              	// main1view2
//              	case 'button3':
// 					$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
// 					$('.main1').show(); 
//              		$('.start-page, .main1view1, .main2').hide();
//              		break; 
             		
//              	// main2view1
//              	case 'button4':
// 					$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
// 					$('.main2').show(); 
//              		$('.start-page, .main2view2, .main1').hide();
//              		break; 

//              	// main2view2
//              	case 'button5':
// 					$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
// 					$('.main2').show(); 
//              		$('.start-page, .main2view1, .main1').hide();
//              		break; 
// 			}
//         });
//     });
