var database = require("../database/config");

function buscarUltimasMedidas(idApiario, limite_linhas) {
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
        SELECT tempInterna, 
        tempExterna, 
        DATE_FORMAT(dataLeitura,'%H:%i:%s') AS 'dataLeitura' 
        FROM registros 
        WHERE fkApiario = ${idApiario} ORDER BY dataLeitura DESC LIMIT 7;`;
        
        
/*         SELECT tempInterna, 
        tempExterna, 
        DATE_FORMAT(dataLeitura,'%H:%i:%s') AS 'dataLeitura' 
        FROM registros ORDER BY dataLeitura DESC LIMIT ${limite_linhas} */;
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
        instrucaoSql = `SELECT 
        tempInterna, 
        tempExterna, 
        DATE_FORMAT(dataLeitura,'%H:%i:%s') AS 'dataLeitura' 
        FROM registros WHERE fkApiario = ${idApiario} ORDER BY dataLeitura DESC LIMIT 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
