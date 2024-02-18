import { conectaApi } from "./conectarAPI.js";
import constroiCard from "../js/mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const termoBusca = document.querySelector('[data-pesquisar]').value;
    const busca = await conectaApi.buscaVideo(termoBusca);
    
    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisar]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));