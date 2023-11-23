let btCapMoeda = document.getElementById('idBtCapMoeda')
let listaMoedas = document.getElementById("idMoedaEntrada");


//let url = https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='11-06-2023'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

let valorMoedas = document.getElementById("idValorMoeda1")
    
btCapMoeda.onclick = function () {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado')
    
    xhr.addEventListener('load', function() {
        let moedas = JSON.parse(xhr.responseText);
        console.log(moedas.value);

        moedas.value.forEach(moeda => {
            let option = document.createElement('option');
            option.value = moeda.simbolo + '(' + moeda.nomeFormatado + ')'; 
            listaMoedas.appendChild(option);          
        });
    })
    xhr.send();

}






/*

//Chamando valores moedas
    btCapMoeda.onclick = function () {

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda=$%7BmoedaSelecionada%7D&@dataCotacao=$%7BdateString%7D&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao)')
        
        xhr.addEventListener('load', function() {
            let moedas = JSON.parse(xhr.responseText);
            console.log(moedas.value);

            moedas.value.forEach(moeda => {
                let option = document.createElement('option');
                option.value = moeda.simbolo + '(' + moeda.nomeFormatado + ')'; 
                valorMoedas.appendChild(option);          
            });
        })
        xhr.send();

    }        


    let adicionarMoedas = document.getElementById('idBtCapMoeda');
    adicionarMoedas.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Passou aqui')
       // buscarMoedas();
    });

*/


https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='EUR'&@dataCotacao='11-06-2023'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

btCapMoeda.onclick = function () {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda= ${EUR} &@dataCotacao= ${"11-06-2023"} &$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
    
    xhr.addEventListener('load', function() {
        let moedas = JSON.parse(xhr.responseText);
        console.log(moedas.value);

        moedas.value.forEach(moeda => {
            let option = document.createElement('option');
            option.value = moeda.simbolo + '(' + moeda.nomeFormatado + ')'; 
            valorMoedas.appendChild(option);          
        });
    })
    xhr.send();

}        


let adicionarMoedas = document.getElementById('idBtCapMoeda');
adicionarMoedas.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Passou aqui')
   // buscarMoedas();
});

