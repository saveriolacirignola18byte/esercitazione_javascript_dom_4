const inputSecondi = document.getElementById("inputSecondi");

const display = document.getElementById("display");

const btnAvvia = document.getElementById("btnAvvia");

const btnPausa = document.getElementById("btnPausa");

const btnReset = document.getElementById("btnReset");

let timer = null;

let secondiRimasti = 0;

function mostra() {

    display.textContent = secondiRimasti;
}

function ferma() {

    clearInterval(timer);

    timer = null;

}

function conta() {

    secondiRimasti = secondiRimasti - 1;

    mostra();

    if (secondiRimasti === 0) {

        ferma();
    }

}

btnAvvia.addEventListener("click", function () {

    if (timer === null) {

        if (secondiRimasti === 0) {

            secondiRimasti = Math.floor(Number(inputSecondi.value));

        }

        if (secondiRimasti > 0) {

            mostra();

            timer = setInterval(conta, 1000);

        } else {

            alert("Inserisci un numero di secondi maggiore di zero");

            secondiRimasti = 0;

        }

    }

});

btnPausa.addEventListener("click", ferma);

btnReset.addEventListener("click", function () {

    ferma();

    secondiRimasti = 0;

    inputSecondi.value = "";

    mostra();
    
});