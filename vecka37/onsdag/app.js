//PIZZA PROGRAM

/*                                                  Arrays eller objekt
                                                    att göra:
                                                    behållare för pizzor, toppings och storlek.✅
                                                    meny för att beställa och lägga ihop
                                                    sätt att räkna ihop beställningen och logga

*/
/* 
 _______  __    __  .__   __.   ______ .___________.__    ______   .__   __.      _______.
|   ____||  |  |  | |  \ |  |  /      ||           |  |  /  __  \  |  \ |  |     /       |
|  |__   |  |  |  | |   \|  | |  ,----'`---|  |----|  | |  |  |  | |   \|  |    |   (----`
|   __|  |  |  |  | |  . `  | |  |         |  |    |  | |  |  |  | |  . `  |     \   \    
|  |     |  `--'  | |  |\   | |  `----.    |  |    |  | |  `--'  | |  |\   | .----)   |   
|__|      \______/  |__| \__|  \______|    |__|    |__|  \______/  |__| \__| |_______/    
                                                                                      */

let customerOrder = () => {
  userinput = prompt(
    `Vi har ${pizzas} och våra priser är: \n liten: ${pizzaPrice.small}\n medium: ${pizzaPrice.medium}\n stor: ${pizzaPrice.large}
  skriv din beställning nedanför ↓
                                      
  `
  );
  return userinput;
};
const order = [];
const keyWords = "Liten, medium, Stor, Kebabpizza, vesuvio, margarita";
let findOrder = (userinput, keyWords) => {
  for (const key in keyWords) {
    if (userinput.includes(key)) {
      order.push(key);
    }
  }
  return order;
};

/*
let calculateOrder = (userinput, order) => {
  order = [];
kollar på denna senare

  return order;
};
*/

let pizzas = ["Kebabpizza", "Vesuvio", "Margarita"];

let pizzaPrice = {
  small: 60,
  medium: 90,
  large: 120,
};

let toppings = {
  oliver: 5,
  pepperoni: 20,
  mozarella: 15,
};

let customer = confirm(
  "Hej och välkommen till placeholder Pizzeria, Vill du beställa?"
);
if (customer) {
  wantsOrder = prompt(
    "Hej det går bra att beställa. Skriv meny för att se menyn"
  );
}
if (wantsOrder == "meny") {
  customerOrder();
  findOrder(userinput);
  //calculateOrder(); todo: gör funktionen
}
