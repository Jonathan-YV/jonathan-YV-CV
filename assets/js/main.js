/* Menu de hamburgues */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

/* Animacion inicio */



function crearEstrellas(){
  const lienzo = document.querySelector('.imagenInicio');
  const estrella = document.createElement('span');


  let size = Math.random() * 4;
  estrella.style.width = 5 + size + 'px';
  estrella.style.height = 5 + size + 'px';


  estrella.style.left= (Math.random() * lienzo.clientWidth - size) + 'px';
  estrella.style.top= (Math.random() * lienzo.clientHeight - size) + 'px';

  lienzo.appendChild(estrella);
  setTimeout(() =>{
    estrella.remove()
  },3000)

}

setInterval(crearEstrellas,20)


/* Ocultar proyectos */

function mostrarIA() {
  document.getElementById("ia-proyectos").style.display = "grid";
  document.getElementById("web-proyectos").style.display = "none";
  document.getElementById("escritos-proyectos").style.display = "none";
  document.getElementById("dibujos-proyectos").style.display = "none";

  document.getElementById("ia").style.color = "var(--rosa)";
  document.getElementById("web").style.color = "var(--gris-claro)";
  document.getElementById("escritos").style.color = "var(--gris-claro)";
  document.getElementById("dibujos").style.color = "var(--gris-claro)";
}

function mostrarWeb() {
  document.getElementById("ia-proyectos").style.display = "none";
  document.getElementById("web-proyectos").style.display = "grid";
  document.getElementById("escritos-proyectos").style.display = "none";
  document.getElementById("dibujos-proyectos").style.display = "none";

  document.getElementById("ia").style.color = "var(--gris-claro)";
  document.getElementById("web").style.color = "var(--rosa)";
  document.getElementById("escritos").style.color = "var(--gris-claro)";
  document.getElementById("dibujos").style.color = "var(--gris-claro)";
}

function mostrarEscritos() {
  document.getElementById("ia-proyectos").style.display = "none";
  document.getElementById("web-proyectos").style.display = "none";
  document.getElementById("escritos-proyectos").style.display = "grid";
  document.getElementById("dibujos-proyectos").style.display = "none";

  document.getElementById("ia").style.color = "var(--gris-claro)";
  document.getElementById("web").style.color = "var(--gris-claro)";
  document.getElementById("escritos").style.color = "var(--rosa)";
  document.getElementById("dibujos").style.color = "var(--gris-claro)";
}

function mostrarDibujos() {
  document.getElementById("ia-proyectos").style.display = "none";
  document.getElementById("web-proyectos").style.display = "none";
  document.getElementById("escritos-proyectos").style.display = "none";
  document.getElementById("dibujos-proyectos").style.display = "grid";

  document.getElementById("ia").style.color = "var(--gris-claro)";
  document.getElementById("web").style.color = "var(--gris-claro)";
  document.getElementById("escritos").style.color = "var(--gris-claro)";
  document.getElementById("dibujos").style.color = "var(--rosa)";
}

/* Mostrar imagenes */

const images = document.querySelectorAll(".imgP");
const containerImage = document.querySelector(".container-img");
const imageC = document.querySelector(".img-show");

images.forEach((image) => {
  image.addEventListener("click", () => {
    addImage(image.getAttribute("src"), image.getAttribute("alt"));
  });
});

const addImage = (srcImage, altImage) => {
  containerImage.classList.toggle("move");
  imageC.classList.toggle("show");
  imageC.src = srcImage;
  copy.innerHTML = altImage;
};

containerImage.addEventListener("click", () => {
  containerImage.classList.toggle("move");
  imageC.classList.toggle("show");
});
