/* <=5 horas 
1 pessoa 400gr de carne / 8latas
1 crianca 200gr de carne / refri 1l 

>5 horas 
1 pessoa 600gr de carne / 12latas
1 crianca 400gr de carne / refri 2l  */



function calcular() {
    console.log("...calculando");
    
    let resultado = document.getElementById("resultado");
    
    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");
   
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qdttotalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdttotalcerveja = cervejaPP(duracao) * adultos;
    let qdttotalrefri =  (refriPP(duracao) / 2) * criancas;

  
    resultado.innerHTML = `<p>${qdttotalcarne / 1000}Kg de carne;</p>`;
    resultado.innerHTML += `<p>${qdttotalcerveja} Latas de cerveja;</p>`;
    resultado.innerHTML += `<p>${qdttotalrefri} Refrigerantes de 2 litros.</p>`;
}

function carnePP(duracao) {
    if (duracao >5) {
        return 600;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >5) {
        return 12;
    } else {
        return 8;
    }
}

function refriPP(duracao) {
    if (duracao >5) {
        return 2;
    } else {
        return 1;
    }
}


