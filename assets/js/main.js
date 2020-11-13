
// var numberOfKilometers, yourAge, yourAge, yourDiscount, fullCost, discountedCost, ticketCostGgeneretor ;

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

//Cosa chiedo all'utente come input
var numberOfKilometers;
var yourAge;

//come 
var yourDiscount;
var fullCost;
var discountedCost;
var ticketCostGgeneretor;
const costOfKilometer = 0.21;

//Input Utente
numberOfKilometers = prompt("Esprimi la validità di percorrenza del titolo di viaggio in chilometri");
console.log(numberOfKilometers);

yourAge = prompt("Quanti anni hai?");
console.log(yourAge);

//Base operetion
fullCost = costOfKilometer * numberOfKilometers;
console.log(fullCost);

if (yourAge < 18 ) {

    yourDiscount = 0.2;
    console.log(yourDiscount);

} else if (yourAge > 65) {
    yourDiscount = 0.4;
    console.log(yourDiscount);

} else {
    yourDiscount = 0;
    console.log(yourDiscount);
}

//conditional operations

//return info
yourTotalCost =  fullCost * ( 1 - yourDiscount);
console.log(yourTotalCost);
