/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1,player2){
    let result = '';

    if (player1 == "Pedra"){
        if (player2 == "Pedra"){
            result = 'Empate!';
        }else if (player2 == "Papel"){
            result = 'Jogador 2 venceu!';
        }else{
            result = 'Jogador 1 venceu!';
        }
    }else if (player1 == "Papel"){
            if (player2 == "Pedra"){
                result = 'Jogador 1 venceu!';
            }else if (player2 == "Papel"){
                result = 'Empate!';
            }else{
                result = 'Jogador 2 venceu!';
            }
    }else{
        if (player2 == "Pedra"){
            result = 'Jogador 2 venceu!';
        }else if (player2 == "Papel"){
            result = 'Jogador 1 venceu!';
        }else{
            result = 'Empate!';
        }
    }

    return result;
}

console.log(result);