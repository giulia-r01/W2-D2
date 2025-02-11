/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 200
let num2 = 100

if (num1 >= num2) {
  console.log("la variabile num1 è maggiore di num2")
} else {
  console.log("La variabile num1 è minore di num2")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 5
let num4 = 4

if (num3 !== num4) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 104

if (num5 % 5) {
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num6 = 8
let num7 = 2

if (num6 === 8 || num7 === 8) {
  console.log("Il valore di uno dei due num corrisponde a 8")
} else if (num6 + num7 === 8) {
  console.log("La somma dei due numeri corrisponde a 8")
} else {
  console.log(
    "Né uno dei valori, né la somma o sottrazione di entrambi corrispondono a 8"
  )
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 450
const shipping = 10

if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Totale del carrello ",
    totalShoppingCart
  )
} else {
  console.log(
    "Non hai diritto alla spedizione gratuita. Totale del carrello compreso di spedizione = ",
    totalShoppingCart + shipping
  )
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let WithDiscount = (totalShoppingCart * 20) / 100
console.log("Prezzo con sconto", WithDiscount)

if (WithDiscount > 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Totale del carrello ",
    WithDiscount
  )
} else {
  console.log(
    "Non hai diritto alla spedizione gratuita. Totale del carrello compreso di spedizione = ",
    WithDiscount + shipping
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num8 = 5
let num9 = 16
let num10 = 2

if (num10 < num8 && num9 > num8) {
  console.log(num10, num8, num9)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let letter = "Non è un numero"
console.log(typeof letter)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num11 = 22

if (22 % 2 === 0) {
  console.log("22 è un numero pari")
} else {
  console.log("22 è un numero dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 10) {
  console.log("Meno di 10")
} else {
  console.log("Meno di 10")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.splice(2, 1)
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numberList.splice(9, 1, 100)
console.log(numberList)
