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
let order = [];
let orderPrice = 0;

const toppings = {
  feta: ["Feta-ost", 12],
  mozarella: ["Mozarella", 15],
  Oliver: ["Oliver", 5],
};

let pizzaprice = [(Small = 60), (medium = 90), (Large = 120)];
let pizzaSize = [
  (Small += "kr small"),
  (medium += "kr medium"),
  (Large += "kr Large"),
];
for (const element of pizzaSize) {
  console.log(element);
}

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


const toppingsMenu = () => {
  let wantsTopping = confirm("Vill du ha topping?");
  if (wantsTopping) {
    userInput = prompt(`Vilken topping vill du ha?`);
    switch (userInput) {
      case "oliver":
        console.log("Du lade till oliver på din beställning");
        order.push(toppings.Oliver);
        return;
      case "mozarella":
        console.log("Du lade till mozarella på din beställning");
        order.push(toppings.mozarella);
        return;
      case "Fetaost":
        console.log("Du lade till fetaost på din beställning");
        order.push(toppings.feta);
        return;

      default:
        break;
    }
  }
};

const meny = () => {
  let villbestalla = confirm("Vill du beställa en pizza?");
  userInput = prompt(
    `Vilken pizza vill du ha?vi har\n ${[
      [pizza.kebab, pizza.Vesuvio, pizza.margarita],
    ]}`
  );

  order.push(
    prompt(`Vilken storlek vill du ha på pizzan? \n Vi har ${pizzaSize}`)
  );
  console.log("Ny beställning");
  switch (userInput) {
    case "kebabpizza":
      console.log("Du valde en KebabPizza");
      order.push(pizza.kebab);
      toppingsMenu();
      return orderPrice + ;

    case "vesuvio":
      toppingsMenu();
      order.push(pizza.Vesuvio);
      console.log("Du valde Vesuvio");
      return;

    case "margarita":
      console.log("Du valde en Margarita");
      order.push(pizza.margarita);
      toppingsMenu();
      return;

    default:
      console.log("ERROR");
      break;
  }
  villbestalla = confirm("Vill du beställa mer?");
};
meny();
console.log(`du beställde ${order} som kostar ${orderPrice}`);
