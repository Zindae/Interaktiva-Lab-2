
var OverView = function (container, model) {
      this.updateDisplay = function() {
            var starter = model.getDish(model.menu['starter']);
            //console.log(starter);
            var main = model.getDish(model.menu['main dish']);
            var dessert = model.getDish(model.menu['dessert']);
                  // var theDiv = $.this;
                  // $.each(model.menu, function(key, val) {
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + starter.image + '"></div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + main.image + '"></div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + dessert.image + '"></div>');
            
            var total = model.getTotalMenuPrice(model.menu)
            $(".right").append('Totalt pris för meny = ' +total+ 'SEK');    
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



