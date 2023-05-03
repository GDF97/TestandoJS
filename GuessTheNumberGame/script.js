let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let maxTentativas = 10;
let tentativas = 0;
const startGame = document.querySelector('.startGame');
const resetGame = document.querySelector('.resetGame');


startGame.addEventListener('click', ()=>{
    alert("Bem vindo ao jogo de adivinhação");
    alert("Você terá "+ maxTentativas +" tentativas para tentar adivinhar o numero aleatorio");
    while(true){
        if(tentativas === maxTentativas){
            alert("Você Falhou, o numero era "+ numeroAleatorio);
            resetGame.style.display = 'flex';
            startGame.style.display = 'none';
            break;
        }
        else{
            let palpite = parseInt(prompt("Digite um numero entre 1 e 100"));
            
            if(palpite < 1 || palpite > 100){
                alert("O numero deve estar entre 1 e 100");
                continue
            }
            
            tentativas++;
            
            if(palpite == numeroAleatorio){
                alert("Parabéns você acerto em " + tentativas + " tentativas!");
                resetGame.style.display = 'flex';
                startGame.style.display = 'none';
                break;
            }
        
            else if(palpite < numeroAleatorio){
                alert("O numero é maior");
            }
            else{
                alert("O numero é menor");
            }
        }
    }
})

resetGame.addEventListener('click', ()=>{
    window.location.href = 'index.html';
})
