// 0 - Adicionar evento em botão para executar contexto da função
async function executar(){
    // 1 - Pegar o valor digitado input (id do personagem)
    console.log("iniciando função")
    const elementoInput = document.getElementById("idPersonagem")
    const idPers = elementoInput.value
    // 2 - Buscar personagem da API (já está pronto)
    const personagem = await buscarPersonagemDaAPI(idPers)
    console.log(personagem)

    
    document.getElementById("persNome").innerHTML = personagem.name
    document.getElementById("status").innerHTML ="Status: " + personagem.status
    document.getElementById("species").innerHTML =  "Especie: " + personagem.species
    document.getElementById("type").innerHTML = "Type: " + personagem.type
    document.getElementById("gender").innerHTML = "Gênenero: " + personagem.gender
    document.getElementById("origin").innerHTML = "Origem: " + personagem.origin.name
    document.getElementById("location").innerHTML = "Localização: " + personagem.location.name
    
    const imgPers = document.getElementById("persImg")
    imgPers.src = personagem.image
    console.log(imgPers)

    

}


/* Função para fazer uma request GET para a API utilizando o JS 
   Veremos logo em seguida! Foquem na leitura do Objeto na função acima.
*/
async function buscarPersonagemDaAPI(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    return response.json()
}

