var SelectionView = function (container, model) {
      // All recipes 

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


      // 1. START-PAGE
      //          => CREATE_MENU
      
      // 2. SIDE-VIEW
      //          => SET_NUMBER_OF_PEOPLE
      //          => CONFIRM_DINNER
      
      // 3. SEARCH-VIEW
      //          => TYPE_IN_SEARCH
      //          => SELECT_TYPE_IN_DROP_DOWN
      
      // 4. SELECTION-VIEW
      //          => SELECT_DISH
      
      // 5. DISH-VIEW
      //          => GO_BACK
      //          => CONFIRM_DISH
      
      // 6. OVER-VIEW
      //          => GO_BACK_AND_EDIT
      //          => PRINT_FULL_RECIPE

      // 7. PREP-VIEW
      //          => GO_BACK_TO_OVERVIEW



