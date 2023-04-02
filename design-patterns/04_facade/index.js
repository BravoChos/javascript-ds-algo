// Facade Pattern

// It is a software design pattern that provides a simplified interface
// to a complex system of classes, interfaces, and objects.
// It acts as a "facade" or simplified entry point to a larger body of code, making it easier to use and understand.

class Kitchen {
  cookBurger() {
    console.log("cooking burger");
  }
  cookSide() {
    console.log("cooking side dishes");
  }
  prepareDrinks() {
    console.log("preparing drinks");
  }
}

class FoodService {
  serve() {
    console.log("Order ready, serving food now");
  }
}

class RestaurantFacade {
  newOrder() {
    const kitchen = new Kitchen();
    kitchen.cookBurger();
    kitchen.cookSide();
    kitchen.prepareDrinks();

    const foodService = new FoodService();
    return foodService.serve();
  }
}

const facade = new RestaurantFacade();
facade.newOrder();
