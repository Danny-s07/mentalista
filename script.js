var numeroSecreto = parseInt(Math.random() * 11)

var tentativas = 3
var p = document.querySelector('.local')
var entrada = document.getElementById('entrada')
var btVerificar = document.getElementById('btVerificar')


p.innerHTML = `Olá eu sou o Jane ("o Mentalista") !<br>Você é capaz de adivinhar o número que estou pensando de 0 a 10 ???<br>Você tem 3 tentativas!`


function verificar(){

    while(tentativas > 0){
        chute = entrada.value
        entrada.value = ''
        if(!isNaN(chute)){
            if(chute == numeroSecreto){
               p.innerHTML = 'Você Acertou!!! \^o^/ <br>Aqui está o seu trofeu!  🏆'
                entrada.disabled = true
                entrada.value = chute
                btVerificar.disabled = true
                break
            }else if (chute > numeroSecreto){   
                tentativas--   
                p.innerHTML = `Está difícil? Te dou uma dica: O número é menor!<br>Você ainda tem ${tentativas} tentativas.`
                break
            }else if (chute < numeroSecreto){
                tentativas--  
                p.innerHTML = `Está difícil? Te dou uma dica: O número é maior!<br>Você ainda tem ${tentativas} tentativas.`
                break
            }  
        }else{
            p.innerHTML = `Digite um número válido!<br>Como sou legal vou deixar essa passar! Você ainda tem ${tentativas} tentativas.`
            break
        }
    }
        
    if(tentativas == 0){
       p.innerHTML = `Você Perdeu!!!<br>O numero era ${numeroSecreto}.`
        entrada.value = ""
        entrada.disabled = true
        btVerificar.disabled = true
    }
  
}

function novoNumero(){
    numeroSecreto = parseInt(Math.random() * 11)
    tentativas = 3
    entrada.disabled = false
    entrada.value = ''
    p.innerHTML = `Olá eu sou o Jane("O Mentalista")! <br>Você é capaz de adivinhar o número que estou pensando de 0 a 10 ???<br>Você tem 3 tentativas!`
    btVerificar.disabled = false
}