//Iniciando 
let arrayCelulas = ['', '', '', '', '', '', '', '', '']
const combinacoesVencedoras = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let simbolos = ['X', 'O']
let turno = 0
function alterarTurno(){
    turno = (turno === 0 ? 1 : 0)
}

let X = 0
let O = 0
let ex = 0

let idEstado = 0
let jogadas = 0

function gameInit(){
    //Células do jogo
    let campoJogo = document.querySelector('#container')
    

    arrayCelulas.map(()=>{

        let celula = document.createElement('div')
        celula.className = 'celula'
        celula.setAttribute('onclick', "jogar(this)")
        celula.id = idEstado
        

        campoJogo.appendChild(celula)
        idEstado++
    })
}

function jogar(e){
    e.innerHTML = simbolos[turno]
    e.onclick = ''
    arrayCelulas[Number(e.id)] = simbolos[turno] 

    let val = verificadorCombinacoes()

    if(val < 0){
        if(jogadas == 8){
            let campoJogo = document.querySelector("#container")
            arrayCelulas = ['','','','','','','','','']
            campoJogo.innerHTML = ''
            idEstado = 0
            turno = 0
            jogadas = 0

            gameInit()
        } else {
            alterarTurno()
        }
    } else {
        pontuacao()
        fimDeJogo(val, simbolos[turno])
    }

    jogadas++      
}

function verificadorCombinacoes(){
    for(let i = 0; combinacoesVencedoras[i] !== undefined; i++){
        if(
            arrayCelulas[combinacoesVencedoras[i][0]] == simbolos[turno] &&  //Como temos uma array multidimensional o i retorna uma array e o 0 é o primeiro índice
            arrayCelulas[combinacoesVencedoras[i][1]] == simbolos[turno] &&  //array i 2 indice
            arrayCelulas[combinacoesVencedoras[i][2]] == simbolos[turno]  //array i 3 indice (a largura máxima dessas arrays é 3 então não tem problema fazer manualmente)
        )
        {
            return combinacoesVencedoras[i]
        }
    }

    return -1 
}

function fimDeJogo(seq, simbolo){
    pintandoCelulas(seq, simbolo)
}

function pintandoCelulas(seq, simbolo){
    document.getElementById(String(seq[0])).addEventListener('animationend', ()=>{
        let campoJogo = document.querySelector("#container")
        arrayCelulas = ['','','','','','','','','']
        campoJogo.innerHTML = ''
        idEstado = 0
        turno = 0

        gameInit()
    })

    for(let i = 0; i <= seq.length; i++){
        document.getElementById(String(seq[i])).className += ' celulaGanho'
    }
}

function reiniciaJogo(id){
    

    gameInit()
}

function pontuacao(){
    switch(simbolos[turno]){
        case "X" :
            X+=1
            document.querySelector("#X").innerHTML = `X: ${X}`
        break;

        case "O" : 
            O+=1
            document.querySelector("#O").innerHTML = `O: ${O}`
        break;
    }
}


   
