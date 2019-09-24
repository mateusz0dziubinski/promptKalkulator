let pierwszaLiczba = 0;
let drugaLiczba = 0;

function mojaFunkcja() {
  pierwszaLiczba = Number(prompt("podaj pierwszą liczbę"));
  drugaLiczba = Number(prompt("podaj drugą liczbę"));

  document.getElementById("liczba1").textContent = pierwszaLiczba;
  document.getElementById("liczba2").textContent = drugaLiczba;
}


function mojaFunkcjaDodawania(){
    suma = pierwszaLiczba + drugaLiczba;
    if(pierwszaLiczba, drugaLiczba){
    document.getElementById("ekranKalkulatora").textContent = suma;
    }
}

function mojaFunkcjaOdejmowania(){
    var wynikOdejmowania = pierwszaLiczba - drugaLiczba;
    if (pierwszaLiczba, drugaLiczba){
        document.getElementById("ekranKalkulatora").innerHTML = wynikOdejmowania;
    }
}

function mojaFunkcjaMnozenia(){
    var wynikMnozenia = pierwszaLiczba * drugaLiczba;
    if (pierwszaLiczba, drugaLiczba){
        document.getElementById("ekranKalkulatora").innerHTML = wynikMnozenia;
    }
}