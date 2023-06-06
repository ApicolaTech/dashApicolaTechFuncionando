var alertas = [];

function obterdados(idApiario) {
    fetch(`/medidas/tempo-real/${idApiario}`)
        .then(resposta => {

            if (resposta.ok) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idApiario);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idApiario) {

    // var tempI = resposta[0].tempI;
    var tempE = resposta[0].tempE;+

    var grauDeAviso = '';

    // var limitesI = {
    //     extremo_quente: 35,
    //     muito_quente: 34.3,
    //     quente: 33.9,
    //     ideal: 33.5,
    //     frio: 32.5,
    //     muito_frio: 31.5,
    //     extremo_frio: 30
    // };

    var limitesE = {
        extremo_quente: 27,
        muito_quente: 26.6,
        quente: 26.0,
        ideal: 25.7,
        frio: 24.4,
        muito_frio: 23.8,
        extremo_frio: 22
    };

    var classe_temperatura = 'cor-alerta';

    // Temperatura interna/limite interno

    // if (tempI >= limitesI.extremo_quente) {
    //     classe_temperatura = 'cor-alerta perigo-quente';
    //     grauDeAviso = 'perigo quente'
    //     grauDeAvisoCor = 'cor-alerta perigo-quente'
    //     exibirAlerta(tempI, idApiario, grauDeAviso, grauDeAvisoCor)
    // }
    // else if (tempI < limitesI.muito_quente && tempI >= limitesI.quente) {
    //     classe_temperatura = 'cor-alerta alerta-quente';
    //     grauDeAviso = 'alerta quente'
    //     grauDeAvisoCor = 'cor-alerta alerta-quente'
    //     exibirAlerta(tempI, idApiario, grauDeAviso, grauDeAvisoCor)
    // }
    // else if (tempI < limitesI.quente && tempI > limitesI.frio) {
    //     classe_temperatura = 'cor-alerta ideal';
    //     removerAlerta(idApiario);
    // }
    // else if (tempI <= limitesI.frio && tempI > limitesI.muito_frio) {
    //     classe_temperatura = 'cor-alerta alerta-frio';
    //     grauDeAviso = 'alerta frio'
    //     grauDeAvisoCor = 'cor-alerta alerta-frio'
    //     exibirAlerta(tempI, idApiario, grauDeAviso, grauDeAvisoCor)
    // }
    // else if (tempI <= limitesI.muito_frio) {
    //     classe_temperatura = 'cor-alerta perigo-frio';
    //     grauDeAviso = 'perigo frio'
    //     grauDeAvisoCor = 'cor-alerta perigo-frio'
    //     exibirAlerta(tempI, idApiario, grauDeAviso, grauDeAvisoCor)
    // }
    // else if (tempI <= limitesI.extremo_frio) {
    //     classe_temperatura = 'cor-alerta perigo-frio';
    //     grauDeAviso = 'perigo frio'
    //     grauDeAvisoCor = 'cor-alerta perigo-frio'
    //     exibirAlerta(tempI, idApiario, grauDeAviso, grauDeAvisoCor)
    // }

    // Temperatura externa/limite externo

    if (tempE >= limitesE.extremo_quente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(tempE, idApiario, grauDeAviso, grauDeAvisoCor)
    }
    else if (tempE < limitesE.muito_quente && tempE >= limitesE.quente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(tempE, idApiario, grauDeAviso, grauDeAvisoCor)
    }
    else if (tempE < limitesE.quente && tempE > limitesE.frio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(idApiario);
    }
    else if (tempE <= limitesE.frio && tempE > limitesE.muito_frio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(tempE, idApiario, grauDeAviso, grauDeAvisoCor)
    }
    else if (tempE <= limitesE.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(tempE, idApiario, grauDeAviso, grauDeAvisoCor)
    }
    else if (tempE <= limitesE.extremo_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(tempE, idApiario, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    // if (document.getElementById(`temp_apiario_${idApiario}`) != null) {
    //     document.getElementById(`temp_apiario_${idApiario}`).innerHTML = tempI + "°C";
    // }

    // if (document.getElementById(`card_${idApiario}`)) {
    //     card = document.getElementById(`card_${idApiario}`)
    //     card.className = classe_temperatura;
    // }

    if (document.getElementById(`temp_apiario_${idApiario}`) != null) {
        document.getElementById(`temp_apiario_${idApiario}`).innerHTML = tempE + "°C";
    }

    if (document.getElementById(`card_${idApiario}`)) {
        card = document.getElementById(`card_${idApiario}`)
        card.className = classe_temperatura;
    }
}

// function exibirAlerta(tempI, idApiario, grauDeAviso, grauDeAvisoCor) {
//     var indice = alertas.findIndex(item => item.idApiario == idApiario);

//     if (indice >= 0) {
//         alertas[indice] = { idApiario, tempI, grauDeAviso, grauDeAvisoCor }
//     } else {
//         alertas.push({ idApiario, tempI, grauDeAviso, grauDeAvisoCor });
//     }

//     exibirCards();
// }

function exibirAlerta(tempE, idApiario, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idApiario == idApiario);

    if (indice >= 0) {
        alertas[indice] = { idApiario, tempE, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idApiario, tempE, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(idApiario) {
    alertas = alertas.filter(item => item.idApiario != idApiario);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

// function transformarEmDiv({ idApiario, tempI, grauDeAviso, grauDeAvisoCor }) {

//     var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == idApiario).descricao;
//     return `
//     <div class="mensagem-alarme">
//         <div class="informacao">
//             <div class="${grauDeAvisoCor}">&#12644;</div> 
//             <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
//             <small>Temperatura ${tempI}.</small>   
//         </div>
//         <div class="alarme-sino"></div>
//     </div>
//     `;
// }

function transformarEmDiv({ idApiario, tempE, grauDeAviso, grauDeAvisoCor }) {

    var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == idApiario).descricao;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura ${tempE}.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}