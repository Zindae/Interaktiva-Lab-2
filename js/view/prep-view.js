
var PrepView = function (container, model) {
      this.updateDisplay = function() {
            var starter = model.getDish(model.menu['starter']);
            var main = model.getDish(model.menu['main dish']);
            var dessert = model.getDish(model.menu['dessert']);



            $(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + starter.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"><p>Här är en text som berättar lite om maträttten du är about tilll att äta.</p></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + starter.description + '</p></div></div></div>' 
                  );
            $(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + main.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"><p>Här är en text som berättar lite om maträttten du är about tilll att äta.</p></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + main.description + '</p></div></div></div>' 
                  );
            $(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + dessert.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"><p>Här är en text som berättar lite om maträttten du är about tilll att äta.</p></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + dessert.description + '</p></div></div></div>' 
                  );
      }
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



