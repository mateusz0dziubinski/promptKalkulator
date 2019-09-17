function mojaFunkcja(){
    var numberX =Number(prompt("Podaj pierwszą liczbę"));
    var numberY =Number(prompt("Podaj drugą liczbę"));
    if (numberX, numberY){
        document.getElementById("liczba1").innerHTML = "Liczba 1:" + " " + + numberX;
        document.getElementById("liczba2").innerHTML = "Liczba 2:" + " " + + numberY;
    }

}
function mojaFunkcjaDodawania(){
    var numberX =Number(prompt("Podaj pierwszą liczbę"));
    var numberY =Number(prompt("Podaj drugą liczbę"));
    var suma = numberX + numberY;
    if (numberX, numberY){
        document.getElementById("ekranKalkulatora").innerHTML = suma;
    }
}

function mojaFunkcjaOdejmowania(){
    var numberX =Number(prompt("Podaj pierwszą liczbę"));
    var numberY =Number(prompt("Podaj drugą liczbę"));
    var wynikOdejmowania = numberX - numberY;
    if (numberX, numberY){
        document.getElementById("ekranKalkulatora").innerHTML = wynikOdejmowania;
    }
}

function mojaFunkcjaMnozenia(){
    var numberX =Number(prompt("Podaj pierwszą liczbę"));
    var numberY =Number(prompt("Podaj drugą liczbę"));
    var wynikMnozenia = numberX * numberY;
    if (numberX, numberY){
        document.getElementById("ekranKalkulatora").innerHTML = wynikMnozenia;
    }
}