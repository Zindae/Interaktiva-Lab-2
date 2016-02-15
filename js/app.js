// CONTROLLER

// JS för mjuk scroll
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

//TEST funktion för JS

function sayHello() {
   alert("Hello World")
}


$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var sideView = new sideView($(".main1sideview"));
	
	//And create the needed controllers and views
	var main1View = new main1View($(".main1 container"));

	var row1 = new row1($('td:row main1view1').hide();) //testkod för HIDE, "row main1view1".
		
	var main1view1 //Skickar info till main1view2
	var main1view2 //Klicka på confirm dish -> addDishToMenu i model
	var main2view1 //for dishes in getFullMenu för att lista upp alla valda rätter	// GetFullMenu kan man använda här.
		x = getFullMenu(); // om det är tre rätter
		for i in x:
			output (i.price, i.något)
	var main2view2 //2-2 visar bilden, ingredienserna, lorem ipsum texten.
	
	

	// $(document).ready(function(){        
	// 	// ADD SOME .css("display", "");
 //        $('#button1, #button2, #button3, #button4, #button5').click(function() {        
 //             switch(this.id) {
 //             	case 'button1'	:
 //             		
 //             		break;
 //             	case 'button2':
 //             		
 //             		break;
 //             	case 'button3':
 //             		
 //             		break;
 //             	case 'button4':
 //             		
 //             		break;
 //             	case 'button5':
 //             		
 //             		break;
	// 		}
 //        });
 //    });

 


});
