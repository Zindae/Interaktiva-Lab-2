// CONTROLLER

$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var sideView = new sideView($(".main1sideview"));
	
	//And create the needed controllers and views
	var main1View = new main1View($(".main1 container"));

	

	// $(document).ready(function(){        
	// 	// ADD SOME .css("display", "");
 //        $('#button1, #button2, #button3, #button4, #button5').click(function() {        
 //             switch(this.id) {
 //             	case 'button1'	:
 //             		$('.view1-and-view2, .view3-and-view4').hide('fast');
 //             		$('.home-page-start').show('fast');
 //             		// $('.view3-and-view4').hide('fast');
 //             		// $('home-page-start').css(	)
 //             		break;
 //             	case 'button2':
 //             		$('.home-page-start, .ingredients-and-preparation, .view3-and-view4').hide('fast');
 //             		$('.view1-and-view2 ').show('fast');
 //             		break;
 //             	case 'button3':
 //             		$('.home-page-start, .select-dishes, .view3-and-view4').hide('fast');
 //             		$('.view1-and-view2 ').show('fast');
 //             		break;
 //             	case 'button4':
 //             		$('.home-page-start, .view1-and-view2, .dinner-preparation').hide('fast');
 //             		$('.view3-and-view4 ').show('fast');
 //             		break;
 //             	case 'button5':
 //             		$('.home-page-start, .view1-and-view2, .dinner-overview').hide('fast');
 //             		$('.view3-and-view4 ').show('fast');
 //             		break;
	// 		}
 //        });
 //    });

 


});
