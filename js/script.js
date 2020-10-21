var calcola = document.getElementById("calcola");
calcola.addEventListener('click',function(){

  var nome = document.getElementById("nome").value;
  var nkm = document.getElementById("nkm").value;
  var eta = document.getElementById("eta").value;
  var biglietto = document.getElementById("biglietto");
  var prezzokm = 0.21;
  var prezzoOut = 0;


  prezzokm = nkm * prezzokm;



  if(eta==1){

    var offerta = "Nessuna offerta applicata";
    prezzoOut = prezzokm;

  } else if(eta == 2){

    var offerta = "Sconto minorenne applicato";
    prezzoOut = prezzokm - ((prezzokm * 20) / 100);
    prezzoOut = prezzoOut.toFixed(2);

  }else if(eta == 3){

    var offerta = "Sconto Over 65 applicato";
    prezzoOut = prezzokm - ((prezzokm * 40) / 100);
    prezzoOut = prezzoOut.toFixed(2);

  }

      var carrozza = Math.floor(Math.random() * 10) + 1;
      var codicecp = Math.floor(Math.random() * 99999) + 1;


        document.getElementById("nomepasseggero").innerHTML = nome;
        document.getElementById("offerta").innerHTML = offerta;
        document.getElementById("carrozza").innerHTML = carrozza;
        document.getElementById("codicecp").innerHTML = codicecp;
        document.getElementById("costobiglietto").innerHTML = prezzoOut+"€";
        biglietto.style.display ="block"
})
