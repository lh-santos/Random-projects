var header = document.getElementById("header");
var navitelago_header = document.getElementById("navitelago_header");
var content = document.getElementById("content");
const carrossel = document.getElementById("carrossel")
const imagens = carrossel.querySelectorAll("img")
const prev = document.getElementById("prev")
const next = document.getElementById('next');
let index = 0;
var showSidebar = false;

function togglesidebar() {
  /*alterna para a barra lateral*/
  showSidebar = !showSidebar;
  if (showSidebar) {
    navitelago_header.style.marginLeft = "-10vw";
    navitelago_header.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)";
  } else {
    navitelago_header.style.marginLeft = "-100vw";
    navitelago_header.style.animationName = "";
    content.style.filter = "";
  }
}

function closeSidebar() {
  if (showSidebar) {
    togglesidebar(); /*Fecha o sidebar quando tocado em uma area fora dele*/
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    togglesidebar();
  }
});


function atualizarCarrossel() {
  carrossel.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % imagens.length;
  atualizarCarrossel();
});

prev.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  atualizarCarrossel();
});

function atualizar() {
  index = (index + 1) % imagens.length;
  atualizarCarrossel();  
}

setInterval(atualizar, 5000)