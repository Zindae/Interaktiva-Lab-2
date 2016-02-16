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
	
	

// // $(document).ready(function(){        
// // 		// ADD SOME .css("display", "");
// //         $('#button1, #button2, #button3, #button4, #button5').click(function() {        
// //              switch(this.id) {
// //              	case 'button1'	:
// //              		// $('.start-page').show('fast');
// //              		$('.main1, main2').hide('fast');
// //              		break;
// //              	// case 'button2':
             		
// //              	// 	break;
// //              	// case 'button3':
             		
// //              	// 	break;
// //              	// case 'button4':
             		
// //              	// 	break;
// //              	// case 'button5':
             		
// //              	// 	break;
// // 			}
// //         });
// //     });

 


// });

$(document).ready(function(){        
	
	// Get DinnerModel function
	var model = new DinnerModel();
	var confirmedDish = [];
	
	// Hide / Show pages
	$('#button2, #back, #main2-go-back').click(function(){
		
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
		$('.start-page, .main1view2, .main2').hide();
		
	});
	
	$('#confirmDish').click(function(){
		
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
		$('.start-page, .main1view2, .main2').hide();
		
		//Confirm pushar till listan för att lagra för sideview
		confirmedDish.push(name.name);
		console.log(confirmedDish);


	});
	
	
	$('#confirmDinner').click(function(){
		// $('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		// $('.main2').show(); 
		// $('.start-page, .main2view2, .main1').hide();
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main2').show(); 
		$('.start-page, .main2view1, .main1').hide();
	});
	
	$(document).on("click",".appDetails", function (event) {
		alert(event.target.id);
	});
	
	// Function to detect clickable
	
	// <table>
    // <tr>
        // <td>1</td>
        // <td>2</td>
        // <td>3</td>
    // </tr>
    // <tr>
        // <td>1</td>
        // <td>2</td>
        // <td>3</td>
    // </tr>
	// </table>
	
	// -------- JQ ---------
	$('.main1view1').delegate('','click',function() {
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
		$('.start-page, .main1view1, .main2').hide();
		
		
		});
	
	
	// All recipes 
	var allRecipes = model.getAll();
	console.log(allRecipes);
	
	// Length of the array for the FOR loop
	var len = allRecipes.length;
	console.log(len);
	
	//Iterates through every recipe in dinnerModel.js
	for(i = 0; i < len; i++){
		
		// Gets specific recipe
		var name = allRecipes[i];
		console.log(name);
		
		//Creates DIV with recipe info.
		$(".main1view1").append('<div class="col-xs-2"><img class="icon" src="./images/'+name.image+'"><p><b>'+name.name+'</b></p><p>'+name.description+'</p></div>');
		}
	
	// j = 1;
	// var view2 = allRecipes[i];
	$(".main1view2").append('<div class="col-xs-6"><img class="icon" src="./images/'+name.image+'"><p><b>'+name.name+'</b></p><p>'+name.description+'</p></div>');
		// $(".dish-name").append('<span>'+name.name+'</span');
		// $(".dish-cost").append('<span>'+name.price+'</span');
		

});
	

	


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
