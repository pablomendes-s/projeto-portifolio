function leiaMais(){
    let pontos=document.getElementById("pontos");
    let maisTexto=document.getElementById("vmais");
    let btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display == "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML= "Leia Mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML= "Leia Menos";
    }
}