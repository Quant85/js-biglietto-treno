


/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

// var numberOfKilometers, yourAge, yourAge, yourDiscount, fullCost, discountedCost, ticketCostGgeneretor ;
//Cosa chiedo all'utente come input
var numberOfKilometers;
var yourAge;

//come 
var yourDiscount;
var fullCost;
var discountedCost;
var costOfKilometer = 0.21;


function ticketCostGgeneretor() {

    //Input Utente
    numberOfKilometers = Number(prompt("Esprimi la validità di percorrenza del titolo di viaggio in chilometri"));
    //console.log(numberOfKilometers);
    
    yourAge = Number(prompt("Quanti anni hai?"));
    //console.log(yourAge);
    
    //Base operetion
    fullCost = costOfKilometer * numberOfKilometers;
    //console.log(fullCost);

    if (isNaN(numberOfKilometers) || isNaN(yourAge)) {
        alert("Informazioni non conforme!")
        yourDiscount = 0;
        fullCost = 0;
        yourTotalCost = 0;
    }
    
    if (yourAge < 18 ) {
    
        yourDiscount = 0.2;
        //console.log(yourDiscount);
    
    } else if (yourAge > 65) {
    
        yourDiscount = 0.4;
        //console.log(yourDiscount);
    
    } else {
    
        yourDiscount = 0;
        //console.log(yourDiscount);
    }
    
    //conditional operations
    
    
    yourTotalCost =  fullCost * ( 1 - yourDiscount);
    //console.log(yourTotalCost);
    
    //return info
    
    document.getElementById("total_cost").innerHTML = yourTotalCost.toFixed(2) + " \u20AC";
    
    document.getElementById("full_cost").innerHTML = fullCost.toFixed(2) + " \u20AC";
    
    document.getElementById("discount").innerHTML = yourDiscount.toFixed(2) * 100 + " \u0025";
}