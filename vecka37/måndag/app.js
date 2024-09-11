console.log("Måndag v37");
console.log("Arrays, Objekt, Funktion");
//                                Arrays

// const frukter = ["Äpple", "Apelsin", "Päron", "Banan"]

// // for (let i = 0; i < frukter.length; i++) {
// //     console.log(frukter[i]);

// // }
// //for...of loop skippar inte tomma rutor
// frukter[12] = "x";
// for (const frukt of frukter) {
//     console.log(frukt)
// }

// //for...in loop, skippar tomma rutor
// for (const frukt in frukter){
//     console.log(`${frukt}: ${frukter[frukt]}`)
// }

// const produkter = [];
// run = true;
// //programs main runtime
// while (run) {
//     produkter.push(prompt("Vad vill du ha?"));
//     userInput = window.confirm("VIll du ha något mer?");

//     if (userInput == false) {
//         console.log(`Du har beställt ${produkter}`)
//         run = false
//     }

// }
// let ordermore = true;
// let items = [];
// let item = "";
// while(ordermore){
// item = prompt("Vad vill du ha?")
// console.log(item)
// items.push(item);
// ordermore = confirm("Vill du ha något mer?")
// //ignorera tomma svar...

// //separera flera inputs från samma svar som olika föremål.
// //max antal föremål
// if(items.length >= 5){
//     console.log("DU har nått max antal varor, programmet avslutas")
//     ordermore = false;
// }

// }
// console.log(items)
//--------------------------------------------------------------------------------
//                                      Objekt

//lista med smaker som skickas ut

//meny där man kan välja smak

//ta emot mängd kulor

// 9) Nu ska vi göra pannkakssmet! Vi behöver 6 dl mjöl, 6 stycken ägg och 12 dl mjölk samt en nypa salt. Kan vi skriva ut instruktioner för det?

// 	Knäck i ägg 1 av 6
// 	…
// 	Lägg i en skopa mjöl, 1 dl av 6

// 1) Skriv ett program som skriver ut instruktioner för att skala en potatis i taget.
//  Fråga användaren hur många potatisar som ska skalas.

// UTMANING: Efter att ha kört programmet en gång,
//  fråga användaren ifall hen vill skala potatisar igen. Om ja så kör programmet igen.

// while (confirm("Vill du skala mera potatisar?")) {
//   let amountOfPotatoes = prompt("Hur många potatisar vill du skala?");
//   console.log(amountOfPotatoes);

//   for (let index = 0; index < amountOfPotatoes; index++) {
//     console.log(`Du har skalat ${index + 1} potatisar`);
//   }
// }
