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
    var tempI = resposta[0].tempI;
    var tempE = resposta[0].tempE;

    console.log(tempI, '   ffffff  ', tempE, 'aaaaaaaa',idApiario);

    console.log(idApiario === resposta[0].fk_aquario)
    
    var grauDeAviso ='';


    var limitesI = {
        extremo_quente: 35,
        muito_quente: 34.3,
        quente: 33.9,
        ideal: 33.5,
        frio: 32.5,
        muito_frio: 31.5,
        extremo_frio: 30
    };

    var limitesE = {
        extremo_quente: 27,
        muito_quente: 26.6,
        quente: 26.0,
        ideal: 25.7,
        frio: 24.4,
        muito_frio: 23.8,
        extremo_frio: 22
    };

    



    if (tempI >= limitesI.extremo_quente) {

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if (tempI < limitesI.extremo_quente && tempI >= limitesI.muito_quente) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if (tempI < limitesI.muito_quente && tempI > limitesI.quente) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if (tempI <= limitesI.quente && tempI > limitesI.ideal) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    else if (tempI <= limitesI.ideal && tempI >= limitesI.frio) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } else if (tempI <= limitesI.frio && tempI >= limitesI.muito_frio) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } else if(tempI <= limitesI.muito_frio && tempI >= limitesI.extremo_frio){
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } else if(tempI <= limitesI.extremo_frio){
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } 

    
    if (tempI >= limitesE.extremo_quente) {

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if (tempI < limitesE.extremo_quente && tempI >= limitesE.muito_quente) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if (tempI < limitesE.muito_quente && tempI > limitesE.quente) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    else if (tempI <= limitesE.quente && tempI > limitesE.ideal) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    else if (tempI <= limitesE.ideal && tempI >= limitesE.frio) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } else if (tempI <= limitesE.frio && tempI >= limitesE.muito_frio) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3', 
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } else if(tempI <= limitesE.muito_frio && tempI >= limitesE.extremo_frio){
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } else if(tempI <= limitesE.extremo_frio){

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            width: '300px',
            height: '100px',
            background: '#3F3',
            color: '#716add',
            title: `${tempI}`,
            showConfirmButton: false,
            timer: 1500
          })
    } 

    var card;

    // if (idApiario == 1) {
    //     temp_aquario_1.innerHTML = temp + "°C";
    //     card = card_1
    // } else if (idApiario == 2) {
    //     temp_aquario_2.innerHTML = temp + "°C";
    //     card = card_2
    // } else if (idApiario == 3) {
    //     temp_aquario_3.innerHTML = temp + "°C";
    //     card = card_3
    // } else if (idApiario == 4) {
    //     temp_aquario_4.innerHTML = temp + "°C";
    //     card = card_4
    // }

    // card.className = classe_temperatura;
}

function exibirAlerta(temp, idApiario, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idApiario == idApiario);

    if (indice >= 0) {
        alertas[indice] = { idApiario, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idApiario, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
    
// Dentro da div com classe grauDeAvisoCor há um caractere "invisível", 
// que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
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

function transformarEmDiv({ idApiario, temp, grauDeAviso, grauDeAvisoCor }) {
    return `<div class="mensagem-alarme">
    <div class="informacao">
    <div class="${grauDeAvisoCor}">&#12644;</div> 
     <h3>Aquário ${idApiario} está em estado de ${grauDeAviso}!</h3>
    <small>Temperatura ${temp}.</small>   
    </div>
    <div class="alarme-sino"></div>
    </div>`;
}
