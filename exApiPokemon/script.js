async function executar(){
    const input = document.getElementById("idPersonagem")
    console.log("Carregando...")
    const idp = input.value
    const personagem = await buscarPersonagemDaAPI(idp)
    console.log(personagem)
}
async function buscarPersonagemDaAPI(id){
    const url = `https://pokeapi.co/api/v2${id}`

    const response = await fetch(url)
    return response.json()
}