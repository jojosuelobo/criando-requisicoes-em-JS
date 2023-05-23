async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConverstida = await conexao.json();
    return conexaoConverstida;
}

export const conectaAPI = {
    listaVideos
}