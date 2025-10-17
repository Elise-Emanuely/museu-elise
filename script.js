
const imagem = document.getElementById("imagem");

function foto1(){
     imagem.src = "imagens/img1.jpg"
     setTimeout("foto2()", 1000);
}

function foto2(){
     imagem.src = "imagens/img2.webp"
     setTimeout("foto3()", 1000);
}

function foto3(){
     imagem.src = "imagens/img3.webp"
     setTimeout("foto1()", 1000);
}

foto1();
