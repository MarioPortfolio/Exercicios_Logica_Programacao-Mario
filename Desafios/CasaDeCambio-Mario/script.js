let btCapMoeda = document.getElementById('idBtCapMoeda')
const listaMoedas = document.getElementById("idMoedaEntrada");
    
btCapMoeda.onclick = function () {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado')
    
    xhr.addEventListener('load', function() {
        let moedas = JSON.parse(xhr.responseText);
        console.log(moedas.value);

        moedas.value.forEach(moeda => {
            let option = document.createElement('option');
            option.value = moeda.simbolo + '(' + moeda.nomeFormato + ')'; 
            listaMoedas.appendChild(option);          
        });
    })
    xhr.send();
}



