var nkm = prompt("Inserisci il numero di kilometri da percorrere");
var eta = prompt("Inserisci l'età del passeggero");

console.log("Il passeggero deve percorrere " + nkm + " ed ha un età di " + eta + " anni");

var prezzokm = 0.21;

var prezzoOut = 0;

prezzokm = nkm * prezzokm;

console.log(prezzokm);


if(eta < 18){
  prezzoOut = prezzokm - ((prezzokm * 20) / 100);
  prezzoOut = prezzoOut.toFixed(2);
  document.getElementById("prezzobiglietto").innerHTML = prezzoOut;
} else if(eta > 65){
    prezzoOut = prezzokm - ((prezzokm * 40) / 100);
    prezzoOut = prezzoOut.toFixed(2);
    document.getElementById("prezzobiglietto").innerHTML = prezzoOut;
}else{
  prezzoOut = prezzokm;
  document.getElementById("prezzobiglietto").innerHTML = prezzoOut;
}
