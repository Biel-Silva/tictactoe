//Iniciando 
const arrayCelulas = [null, null, null, null, null, null, null, null, null]

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
    e.innerHTML = "X" 
    
    arrayCelulas[Number(e.id)] = "X"
}