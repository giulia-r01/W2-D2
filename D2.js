/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 29
const num2 = 10

if (num1 > num2) {
  console.log(num1 + " è maggiore di " + num2)
} else {
  console.log(num2 + " è maggiore di " + num1)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num2 !== 5) {
  console.log("not equal")
} else {
  console.log("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 % 5 === 0) {
  console.log(num1 + " è divisibile per 5")
} else {
  console.log(num1 + " non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n1 = 10
const n2 = 7

if (n1 === 8 || n1 + n2 === 8) {
  console.log(n1 + " è uguale a 8, oppure la somma di n1 + n2 da 8")
} else if (n2 === 8 || n1 - n2 === 8) {
  console.log(n2 + " è uguale a 8, oppure la somma di n1 + n2 da 8")
} else {
  console.log("nessuna delle condizioni si avvera")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 28
const shipping = 10

if (totalShoppingCart > 50) {
  console.log(
    "Totale carrello: " +
      totalShoppingCart +
      " Hai diritto alla spedizione gratuita"
  )
} else {
  console.log(
    "Totale carrello: " +
      (totalShoppingCart + shipping) +
      " Non hai diritto alla spedizione gratuita"
  )
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let scount = (totalShoppingCart * 20) / 100

if (totalShoppingCart - scount > 50) {
  console.log(
    "Totale carrello con sconto del 20% = " +
      (totalShoppingCart - 0.2) +
      " Hai diritto alla spedizione gratuita"
  )
} else {
  console.log(
    "Totale carrello con sconto del 20% = " +
      (totalShoppingCart - scount) +
      " Non hai diritto alla spedizione gratuita"
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 10
let number2 = 4
let number3 = 2

if (number1 > number2 && number2 > number3) {
  console.log(number1, number2, number3)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let str = "ciao"

if (typeof number1 !== typeof str) {
  console.log(number1 + " Non è una stringa, è un " + typeof number1)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (number2 % 2 === 0) {
  console.log(number2 + " È un numero pari")
}

/* SCRIVI QUI LA TUA RISPOSTA */

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
if (val < 5) {
  console.log("Meno di 5")
} else if (val < 10) {
  console.log("Meno di 10")
} else {
  console.log("Uguale a 10 o maggiore")
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
me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arr = []
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr[9] = 100
console.log(arr)
