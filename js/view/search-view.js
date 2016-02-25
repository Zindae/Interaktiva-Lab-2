var ExampleView = function (container) {
      
      // Get all the relevant elements of the view (ones that show data
      // and/or ones that responed to interaction)
      this.numberOfGuests = container.find("#numberOfGuests");
      this.plusButton = container.find("#plusGuest");
      this.minusButton = container.find("#minusGuest");
      
      this.numberOfGuests.html("Hello World");
      
}


var SearchView = function (container) {
      // maybe search view is a static view and shouldn't be instantiated as a View
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



