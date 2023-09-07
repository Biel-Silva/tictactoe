//Iniciando 
const arrayCelulas = ['', '', '', '', '', '', '', '', '']
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

    if(verificadorCombinacoes() != true){
        console.log(verificadorCombinacoes())
        alterarTurno()
    } else {
        fimDeJogo()
    }
            
}

function verificadorCombinacoes(){
    for(let i = 0; combinacoesVencedoras[i] !== undefined; i++){
        if(
            arrayCelulas[combinacoesVencedoras[i][0]] == simbolos[turno] &&
            arrayCelulas[combinacoesVencedoras[i][1]] == simbolos[turno] &&
            arrayCelulas[combinacoesVencedoras[i][2]] == simbolos[turno]
        )
        {
            return true
        }
    }

    return false
}

function fimDeJogo(){
    location.reload()
}


   
