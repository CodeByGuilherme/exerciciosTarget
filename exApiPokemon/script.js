window.addEventListener("load", function(){
    console.log("A janela carregada!")
    document.getElementById("busca").addEventListener("click", funcaoPrincipal)
})
function funcaoPrincipal(){
    //entradas
    pegarValueInput()
    //processamento
    chamarApi()
    //saida
    mostrarDados()
}
function pegarValueInput(){
    const elementoInput = document.getElementById("idPokemon")
    const valor = elementoInput.value
    console.log(valor)
}
async function chamarApi(){
    const url = `https://pokeapi.co/api/v2/pokemon/${codigo}`
    const resposta = await fetch (url)
    const valor = await resposta.json()

}
function mostrarDados(){

}