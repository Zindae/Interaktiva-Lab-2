var SelectionView = function (container, model) {
	this.updateDisplay = function() {
		
		$(".main1view1").html('');
		
		var allRecipes = model.getAll();

      // Length of the array for the FOR loop
		var len = allRecipes.length;
		
      // Iterates through every recipe in dinnerModel.js
		for (i = 0; i < len; i++) {
            
            // Gets specific recipe
            var outputDish = allRecipes[i];
            //Creates DIV with recipe info.
			//console.log(outputDish.id);
            $(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.id+'" ><img class="icon" src="./images/'+outputDish.image+'"><a href="#" data-toggle="popover" data-trigger="focus" title="'+outputDish.name+'" data-content="'+outputDish.description+'"><p><b>'+outputDish.name+'</b></p></a></div>');
	 	 };
		 
		
		// Click function here to update the event handler when model.update() occurs.
		
		$('.main1view1dishes').click(function(){
			
			var dishID = $(this).attr('id');		
			model.setDishID(dishID);			
			$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
			$('.main1').show(); 
			$('.start-page, .main1view1, .main2').hide();
			model.update();
		});

	};
};
