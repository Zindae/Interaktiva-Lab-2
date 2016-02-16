$(document).ready(function(){        
	
	// Get DinnerModel function
	var model = new DinnerModel();
	

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
		// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		// $('.main1').show(); 
		// $('.start-page, .main1view1, .main2').hide();

		//console.log($('main1view1').get( 0 ));
		//$(".main1view2").append('<div class="col-xs-2"><img class="icon" src="./images/'+name.image+'"><p><b>'+name.name+'</b></p><p>'+name.description+'</p></div>');
		
		
		
		
	// MAIN1VIEW1 page generation, get data from Dinnermodel.js.
	
	// All recipes 
	var allRecipes = model.getAll();
	
	// Length of the array for the FOR loop
	var len = allRecipes.length;
	
	//Iterates through every recipe in dinnerModel.js
	for(i = 0; i < len; i++){
		
		// Gets specific recipe
		var name = allRecipes[i];
	
		//Creates DIV with recipe info.
		$(".main1view1").append('<div class="col-xs-2"><img class="icon" src="./images/'+name.image+'"><a href="#" data-toggle="popover" data-trigger="focus" title="'+name.name+'" data-content="'+name.description+'"><p><b>'+name.name+'</b></p></a></div>');

		//$(".main1view1").append('<a href="#" data-toggle="popover" title="'+name.name+'" data-content="'+name.description+'">123</a>');
		//$(".main1view1").append('<div class="col-xs-2"><img class="icon" src="./images/'+name.image+'"><p><b>'+name.name+'</b></p></div>');

	};
	/////////////// MAINVIEW END //////////////
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
		
		// // ==> SHOW & hide used to display each 'page'
		// // short css 'display' reset before each hide/show in order to prevent
		// // conflicts since hide/show is abstracted under jquery.
        
        // $('#button1, #button2, #button3, #button4, #button5').click(function() {        
             
             // switch(this.id) {
             	
             	// // start-page
             	// case 'button1'	: 
             		// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
             		// $('.start-page').show(); 
             		// $('.main1, .main2').hide();
             		// break; 
             	
             	// // main1view1
             	// case 'button2':
             		// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
             		// $('.main1').show(); 
             		// $('.start-page, .main1view2, .main2').hide();
             		// break; 
             		
             	// // main1view2
             	// case 'button3':
					// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
					// $('.main1').show(); 
             		// $('.start-page, .main1view1, .main2').hide();
             		// break; 
             		
             	// // main2view1
             	// case 'button4':
					// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
					// $('.main2').show(); 
             		// $('.start-page, .main2view2, .main1').hide();
             		// break; 

             	// // main2view2
             	// case 'button5':
					// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
					// $('.main2').show(); 
             		// $('.start-page, .main2view1, .main1').hide();
             		// break; 
			// }
        // });
    // });
