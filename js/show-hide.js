$(document).ready(function(){ 
		
		// ==> SHOW & hide used to display each 'page'
		// short css 'display' reset before each hide/show in order to prevent
		// conflicts since hide/show is abstracted under jquery.
        
        $('#create-dinner, #confirm-dinner, #main2-go-back, #back, #confirmDish, #print-recipe, #button1, #button2, #button3, #button4, #button5').click(function() {        
             
			 
			 
            switch(this.id) {
       	
       	// start-page
       	case 'button1': 
       		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
       		$('.start-page').show(); 
       		$('.main1, .main2').hide();
       		break; 
       	
       	// main1view1
       	case 'button2':
            case 'create-dinner':
		case 'back':
       	case 'confirmDish':
		case 'main2-go-back':
       		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
       		$('.main1').show(); 
       		$('.start-page, .main1view2, .main2').hide();
       		break; 
       		
       	// main1view2
       	case 'button3':
				$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
				$('.main1').show(); 
       		$('.start-page, .main1view1, .main2').hide();
       		break; 
       		
       	// main2view1
       	case 'button4':
		case 'confirm-dinner':
				$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
				$('.main2').show(); 
       		$('.start-page, .main2view2, .main1').hide();
       		break; 

       	// main2view2
       	case 'button5':
		case 'print-recipe':
				$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
				$('.main2').show(); 
       		$('.start-page, .main2view1, .main1').hide();
       		break; 
			}
		});
});