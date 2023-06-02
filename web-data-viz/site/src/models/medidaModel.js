var database = require("../database/config");

function buscarUltimasMedidasTeste(idApiario) {
    console.log(idApiario + 'Cheguei na model')
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = 1
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select 
        DATE_FORMAT(DataHora,'%H:%i:%s')  AS DataHora,
    fkApiario,
	round(sum(case when fkSensor=(SELECT idSensor FROM Sensor WHERE fkApiario = ${idApiario} ORDER BY idSensor LIMIT 1) then Temperatura else 0 end),2) as tempI,
    round(sum(case when fkSensor=(SELECT idSensor FROM Sensor WHERE fkApiario = ${idApiario} ORDER BY idSensor DESC LIMIT 1) then Temperatura else 0 end),2) as tempE
    from apicolatech.registroapiario
    group by DataHora,
    fkApiario	
    order by DataHora desc LIMIT 7;`
       /* SELECT 
        tempI tempInterna, 
        tempE tempExterna, 
        DATE_FORMAT(DataHora,'%H:%i:%s') AS 'dataLeitura' 
        FROM registros
        WHERE fkApiario = ${idApiario}
        group by DataHora, fkApiario
        order by DataHora desc LIMIT 7; */
        ;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idApiario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idApiario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql =`select 
        DATE_FORMAT(DataHora,'%H:%i:%s') AS DataHora,
        fkApiario,
        round(sum(case when fkSensor=(SELECT idSensor FROM Sensor WHERE fkApiario = ${idApiario} ORDER BY idSensor LIMIT 1) then Temperatura else 0 end),2) as tempI,
        round(sum(case when fkSensor=(SELECT idSensor FROM Sensor WHERE fkApiario = ${idApiario} ORDER BY idSensor DESC LIMIT 1) then Temperatura else 0 end),2) as tempE
        from apicolatech.registroapiario
        group by DataHora,
        fkApiario	
        order by DataHora desc LIMIT 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidasTeste,
    buscarMedidasEmTempoReal
}
