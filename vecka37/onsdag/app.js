//Pizzeria med 3 pizzor och 3 storlekar, large = 90kr, medium = 60kr, small = 30kr
//Kebabpizza - tomat, kebab, sås
//vesuvio - tomat, skinka, ost
//margarita - tomat, ost
//toppings - feta-ost, mozzarella, Oliver

/*todo 
funktion som sammanställer beställning
funktion som räknar ut totala kostnaden
få beställning att upprepas tills användaren går vidare till nästa steg



*/

const toppings = {
  feta: ["Feta-ost", 12],
  mozarella: ["Mozarella", 15],
  Oliver: ["Oliver", 5],
};

const pizzaSize = {
  small: 30,
  medium: 60,
  large: 90,
};

const pizza = {
  kebab: "KebabPizza",
  Vesuvio: "Vesuvio",
  margarita: "Margarita",
};
const pizzaContains = {
  Kebab: ["tomat", "kebab", "Sås"],
  Vesuvio: ["Skinka", "tomat", "ost"],
  margarita: ["tomat", "ost"],
};

userInput = prompt(
  `Vilken pizza vill du ha?vi har\n ${[
    [pizza.kebab, pizza.Vesuvio, pizza.margarita],
  ]}`
);

const toppingsMenu = () => {
  let wantsTopping = confirm("Vill du ha topping?");
  if (wantsTopping) {
    userInput = prompt(`Vilken topping vill du ha?`);
    switch (userInput) {
      case "oliver":
        return console.log("Blä oliver");
      case "mozarella":
        return;
      case "Fetaost":
        return;

      default:
        break;
    }
  }
};

const meny = () => {
  switch (userInput) {
    case "kebabpizza":
      console.log("Du valde en KebabPizza");
      toppingsMenu();
      return;

    case "Vesuvio":
      toppingsMenu();
      console.log("Du valde Vesuvio");
      return;

    case "Margarita":
      console.log("Du valde en Margarita");
      toppingsMenu();
      return;

    default:
      break;
  }
};
meny();
