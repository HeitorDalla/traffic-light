"use strict";

function iniciarSemaforo () {
    setTimeout(() => {
        corVerde();
    }, 1000);
};

function corVerde () {
    let corVerde = document.querySelector("#containerCores .corVerde");
    corVerde.style.backgroundColor = 'green';
    setTimeout(() => {
        corVerde.style.backgroundColor = 'white';
        corAmarelo();
    }, 6000);
};

function corAmarelo () {
    let corAmarelo = document.querySelector("#containerCores .corAmarelo");
    corAmarelo.style.backgroundColor = 'yellow';
    setTimeout(() => {
        corAmarelo.style.backgroundColor = 'white';
        corVermelho();
    }, 2000);
};

function corVermelho () {
    let corVermelho = document.querySelector("#containerCores .corVermelho");
    corVermelho.style.backgroundColor = 'red';
    setTimeout(() => {
        corVermelho.style.backgroundColor = 'white';
        corVerde();
    }, 8000);
};

iniciarSemaforo();