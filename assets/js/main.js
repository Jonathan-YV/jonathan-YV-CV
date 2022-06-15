/* Loader */

const loader = document.querySelector('.carga');
const scrollY = document.querySelector('body');

setTimeout(() =>{
  scrollY.style.overflowY = 'visible'
},3000)

setTimeout(() =>{
  loader.style.display = 'none'
},4400)



/* Menu de hamburgues */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

/* Animacion inicio */

let lienzo = document.querySelector('.imagenInicio');

function crearEstrellas(){
  const estrella = document.createElement('span');

  let size = Math.random() * 4;
  estrella.style.width = 5 + size + 'px';
  estrella.style.height = 5 + size + 'px';


  estrella.style.left= (Math.random() * lienzo.clientWidth - size - 20) + 'px';
  estrella.style.top= (Math.random() * lienzo.clientHeight - size) + 'px';

  lienzo.appendChild(estrella);
  setTimeout(() =>{
    estrella.remove()
  },3000)

}

if (lienzo.clientWidth <= 576 ){
  setInterval(crearEstrellas,60)
} else if(lienzo.clientWidth <= 768){
  setInterval(crearEstrellas,30)
} else{
  setInterval(crearEstrellas,20)
}

/* Puesto */

let i = 0;
let j = 0;
const puestos = ["Java Full Stack   ", "Machine Learning   "]
let puesto = puestos[j];

setTimeout(escritura,4500)

function escritura() {
  if (i < puesto.length) {
    document.querySelector(".puesto-dev").innerHTML += puesto.charAt(i);
    i++;
    setTimeout(escritura, 150);
  }
  else{
    borrar()
  }
}

function borrar() {
  if (i > 0 ) {
    puesto = puesto.slice(0,-1)
    document.querySelector(".puesto-dev").innerHTML = puesto;
    i--;
    setTimeout(borrar, 50);
  }
  else{
    if(j == puestos.length - 1){
      j = 0;
    }else{
      j++;
    } 
    puesto = puestos[j]
    escritura()
  }
}

/* Menu transparente */

const navbar = document.querySelector('.header')
window.onscroll = function() {
  if (window.scrollY <= lienzo.clientHeight){
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
  }
  else{
    navbar.style.backgroundColor = "rgb(0, 0, 0)"; 
  }
};


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
