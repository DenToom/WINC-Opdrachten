
const age = 21;

if (age >= 18 && age <=25 ) {
  console.log("Welkom, kom binnen and dude you get 50% discount on beers");
} else if (age > 25){
  console.log("Welkom, kom binnen.");
} else {
  console.log("U bent te jong en mag helaas niet naar binnen.");
}

const myName = "sara";

if (myName.toLowerCase() === "bram" || myName.toLowerCase() === "sara" ) {
  console.log("You are the chosen-one, u krijgt van ons een gratis biertje.");
} /*else if (myName.toLowerCase() === "sara"{
  console.log("You are the chosen-one, u krijgt van ons een gratis biertje");
} */else {
  console.log("Hartelijk welkom, wij wensen u een plezierige avond");
}

const isFemale = true;

if (isFemale) {
  console.log("Welkom, kom binnen.");
} else {
  console.log("Vanavond is Ladies Night, morgen bent u weer welkom.");
}

const driverStatus = "HENK";

if (driverStatus.toLowerCase() === "bob") {
  console.log("U bent de BOB, goede reis en rij voorzichtig.");
} else {
  console.log("Glaasje op, Laat je rijden, regel een BOB of neem een taxi.");
}

const myOrderValue = 20;

if (myOrderValue >= 25 && myOrderValue <= 49) {
  console.log("U komt in aanmerking voor een gratis portie (vega)bitterballen.");
} else if (myOrderValue >= 50 && myOrderValue <= 99){
  console.log("U komt in aanmerking voor een gratis portie Nachos, met saus naar keuze.");
} else if (myOrderValue >= 100){
  console.log("U komt in aanmerking voor een feestelijk fles Champagne.");
} else {
  console.log("");
}


/*
const age = 26;

if (age >= 18 && age <= 25) {
    console.log("You lucky bastard, you get 50% discount on beers today!");    
} else {
    console.log("You lucky dude, you get 50% discount on non-alcholic drinks");
}
*/

