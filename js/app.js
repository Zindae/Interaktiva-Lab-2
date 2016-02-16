// // CONTROLLER

// // JS för mjuk scroll
// $('a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }

// });

// //TEST funktion för JS

// function sayHello() {
//    alert("Hello World")
// }


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

	var model = new DinnerModel();

	$('#button2').click(function(){
		
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
		$('.start-page, .main1view2, .main2').hide();
		
	});
	
	var name = model.dishes;
	for (i in model.dishes) {
		console.log(i);
	}
	console.log(name.name);
	// for(i in model.dishes){
		// $('.main1view1').html('<div class="col-xs-2"><img class="icon" src="icons/configuration28.svg" alt="Icon"><p>ea commodo cons</p></div>');
	// }
	
	$(".main1view1").each(function() {
		$(this).append('<div class="col-xs-2"><img class="icon" src="images/meatballs.jpg" alt="Icon"><p>',name,'</p></div>');
	});
});
	
	
	
	// for(key in dishes){
			// if(dishes[key].id == id) {
				// return dishes[key];
				

	
	
// $(document).getElementById('link').onclick = function()
// {
    // location.href = document.getElementById('link_id').value;
// };


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
