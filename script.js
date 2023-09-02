//Iniciando 
const arrayCelulas = ['', '', '', '', '', '', '', '', '']
const combinacoesVencedoras = {
    0:[0,1,2],
    1:[3,4,5],
    2:[6,7,8],
    3:[0,3,6],
    4:[1,4,7],
    5:[2,5,8],
    6:[0,4,8],
    7:[2,4,6]
}

const simbolos = ['X', 'O']
let turno = 0
function alterarTurno(){
    turno = (turno === 0 ? 1 : 0)
}

let X = 0
let O = 0

function gameInit(){
    //Células do jogo
    let campoJogo = document.querySelector('#container')
    let idEstado = 0

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
    arrayCelulas[Number(e.id)] = simbolos[turno]

    verificadorCombinacoes()

    alterarTurno()
}

function verificadorCombinacoes(){
    for(let i in combinacoesVencedoras){
        if(
            arrayCelulas[combinacoesVencedoras[i][0]] == simbolos[turno] &&
            arrayCelulas[combinacoesVencedoras[i][1]] == simbolos[turno] &&
            arrayCelulas[combinacoesVencedoras[i][2]] == simbolos[turno]

        ){
            console.log("foi")

            let simboloVencedor = simbolos[turno]

            fimDeJogo(combinacoesVencedoras[i], simboloVencedor)
        }
    }
}

function fimDeJogo(seq, vencedor){
    let seqArray = seq

    for(let i = 0; i <= seqArray.length; i++){
        let celulaSeqVencedora = document.getElementById(seqArray[i])
        
    }

    console.log(vencedor)

    if(vencedor === "X"){
        document.querySelector('#X').innerHTML = 'X: '+(X+1)
    } else if (vencedor === "O") {
        document.querySelector('#O').innerHTML = 'O: '+(O+1)
    }

    document.querySelector("#container").innerHTML = ''

    gameInit()
}
   
