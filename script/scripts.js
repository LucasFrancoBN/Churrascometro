// carne/adulto 400g | + 5 h 600g
// cerveja 1300 ml | + 5 h 2250 ml
// refrigerante 750ml | + 5 h 1125 ml
// crainca =  0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
console.log(resultado)


function calcular() {
    console.log("calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carneTotal = adultos*carnePP(duracao) + (criancas*carnePP(duracao))/2;
    let cervejaTotal = adultos*cervejaPP(duracao);
    let reTotal = adultos*rePP(duracao) + (criancas*rePP(duracao))/2

    resultado.innerHTML = `<div style="display: flex; justify-content: flex-start; align-items: center; margin-bottom: 15px;"><img src="./assets/bife.png" style="float: left"><p style="margin-left:35px">${Math.ceil(carneTotal/1000)}Kg de carne</p></div>`;
    resultado.innerHTML += `<div style="display: flex; justify-content: flex-start; align-items: center; margin-bottom: 15px;"><img src="./assets/beer.png" style="float: left"><p style="margin-left:35px">${Math.ceil(cervejaTotal/350)} Latinhas de cerveja</p></div>`;
    resultado.innerHTML += `<div style="display: flex; justify-content: flex-start; align-items: center; margin-bottom: 15px;"><img src="./assets/soda.png" style="float: left"><p style="margin-left:35px">${Math.ceil(reTotal/600)}L de refrigerante</p></div>`;
}

function carnePP(duracao) {
    if (duracao >= 5) {
        return 600
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 5) {
        return 2250
    } else {
        return 1300
    }
}

function rePP(duracao) {
    if (duracao >= 5) {
        return 1125
    } else {
        return 600
    }
}