//let msg1 = document.getElementById('idMsg');
//let anoNasci = document.getElementById('idAno');//INSERIR ANO
//let img = document.getElementById('idImg'); //LOCALIZAÇÃO DA IMAGEM
//let msgIdade = document.getElementById('idMsgIdade') // RETONAR UMA RESPOSTA

function verificar() {
    let data = new Date() // CAPTURA DATA
    let ano = data.getFullYear() // CAPTURA ANO COM 4 DIGITOS
    let anoInformado = document.getElementById('idAno') // CAPTURA ANO INFORMADO PELO USUARIO
    let res = document.getElementById('idMsgIdade') // RETONAR UMA RESPOSTA
    let idade = ano - Number(anoInformado.value) // CALCULA PARA IDADE
    let msgIdade = document.getElementById('idMsgIdade') // RETONAR UMA RESPOSTA
    
        
    //window.alert('dia')

    // Testa se o ano digitado é vazio, se ano digitado é 
    // maior que o ano atual e se é um número, caso contrario passa no teste com ok.

    if (anoInformado.value.length == 0 || Number(anoInformado.value) > ano) {
        window.alert('[ERRO] - verificar os dados e tente novament') 
        
    } else {
        let formSex = document.getElementsByName('radSex')
        let idade = ano - Number(anoInformado.value)
        let genero = ''
        let img = document.createElement('img') // Cria um elemento de imagem

        //img.setAttribute('id', 'foto') 

        // Testa o sexo e diferenças de idade 
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade <10) {
               //criança
               img.setAttribute('src', 'assets/menino.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'assets/Homemadolescente.png') //Defina o atributo src com o URL da imagem desejada

            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'assets/homem.png')
            } else {
                img.setAttribute('src', 'assets/maduro.png')
                
            } 
            msgIdade.innerHTML = `Detectamos que você é um ${genero} com ${idade} anos.`
            msgIdade.appendChild(img)
        


        // Testa o sexo e diferenças de idade 
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 1 && idade <10) {
                //criança
                img.setAttribute('src', 'assets/menina.png')
                
             } else if (idade < 25) {
                 //jovem
                 img.setAttribute('src','assets/adolescenteMulher.png')
             } else if (idade < 45) {
                 //adulto
                 img.setAttribute('src', 'assets/mulher.png')
             } else {
                img.setAttribute('src', 'assets/madura.png')
             }
            msgIdade.innerHTML = `Detectamos que você é uma ${genero} com ${idade} anos.`
            msgIdade.appendChild(img) // Adicione o elemento de imagem ao DOM

        }
       
    }

   

}