var SelectionView = function (container, model) {

      var allRecipes = model.getAll();
      // console.log(allRecipes);

      // Length of the array for the FOR loop
      var len = allRecipes.length;
      
      //Iterates through every recipe in dinnerModel.js
      for (i = 0; i < len; i++) {
            
            // Gets specific recipe
            var outputDish = allRecipes[i];
      
            //Creates DIV with recipe info.

            $(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.id+'" ><img class="icon" src="./images/'+outputDish.image+'"><a href="#" data-toggle="popover" data-trigger="focus" title="'+outputDish.name+'" data-content="'+outputDish.description+'"><p><b>'+outputDish.name+'</b></p></a></div>');
	};
};
