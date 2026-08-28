var header = document.getElementById("header");
var navitelago_header = document.getElementById("navitelago_header");
var content = document.getElementById("content");
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
