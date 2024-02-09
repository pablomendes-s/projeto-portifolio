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

// faz com que o carrossel passe as imagens automaticamente.

document.addEventListener('DOMContentLoaded', function () {
    // Seletor do seu carrossel (use o ID do seu carrossel)
    var carrossel = new bootstrap.Carousel(document.getElementById('carrossel'), {
      interval: 3000, // Intervalo em milissegundos (3 segundos neste exemplo)
      wrap: true // Para reiniciar o carrossel quando chegar ao último slide
    });
  });