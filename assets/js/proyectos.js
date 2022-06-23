/* Ocultar proyectos */

const mostrarProyectos = document.querySelector("#mostrar-proyectos");

mostrarWeb();

function mostrarWeb() {
  mostrarProyectos.innerHTML = "";

  const template = `
                        <a class="item-proyecto textoE" target="black" href="https://www.siafi-unam.com.mx/">SIAFI</a>
                        <a class="item-proyecto textoE" target="black" href="https://jonathan-yv.github.io/macOS/">macOS</a>
                        <a class="item-proyecto textoE" target="black" href="https://jonathan-yv.github.io/jikan-api/">Jikan API</a>
                        <a class="item-proyecto textoE" target="black" href="https://jonathan-yv.github.io/validacion-formulario/">Validación formulario</a>
                        <a class="item-proyecto textoE" target="black" href="https://jonathan-yv.github.io/temporizador/">Temporizador</a>
                        `;

  mostrarProyectos.innerHTML = template;

  document.getElementById("ia").style.color = "var(--gris-claro)";
  document.getElementById("web").style.color = "var(--rosa)";
  document.getElementById("escritos").style.color = "var(--gris-claro)";
  document.getElementById("dibujos").style.color = "var(--gris-claro)";
}

function mostrarIA() {
  mostrarProyectos.innerHTML = "";

  const template = `
                        <div class="item-proyecto textoP">KANAN</div>
                        <div class="item-proyecto textoP">IKAL</div>
                        <div class="item-proyecto textoP">MichiGAN</div>
                        <div class="item-proyecto textoP">Tenolli</div>
                        `;

  mostrarProyectos.innerHTML = template;

  document.getElementById("ia").style.color = "var(--rosa)";
  document.getElementById("web").style.color = "var(--gris-claro)";
  document.getElementById("escritos").style.color = "var(--gris-claro)";
  document.getElementById("dibujos").style.color = "var(--gris-claro)";
}

function mostrarEscritos() {
  mostrarProyectos.innerHTML = "";

  const template = `
                        <div class="item-proyecto">
                            <img src="assets/img/Escritos/1.png" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Escritos/2.jpg" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Escritos/3.png" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Escritos/4.png" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Escritos/5.png" class="imgP" alt="" />
                        </div>
                        `;

  mostrarProyectos.innerHTML = template;

  document.getElementById("ia").style.color = "var(--gris-claro)";
  document.getElementById("web").style.color = "var(--gris-claro)";
  document.getElementById("escritos").style.color = "var(--rosa)";
  document.getElementById("dibujos").style.color = "var(--gris-claro)";

  buscarImagenes()
}

function mostrarDibujos() {
  mostrarProyectos.innerHTML = "";

  const template = `
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/Dibujo2.jpg" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/Elias.jpg" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/ImagenFinal.PNG" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/Llaveros.PNG" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/Personaje2.png" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/Principe Oso.png" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/TeAmo.png" class="imgP" alt="" />
                        </div>
                        <div class="item-proyecto">
                            <img src="assets/img/Dibujos/Regalo_romboS.png" class="imgP" alt="" />
                        </div>
                        `;

  mostrarProyectos.innerHTML = template;

  document.getElementById("ia").style.color = "var(--gris-claro)";
  document.getElementById("web").style.color = "var(--gris-claro)";
  document.getElementById("escritos").style.color = "var(--gris-claro)";
  document.getElementById("dibujos").style.color = "var(--rosa)";

  buscarImagenes()
}


const containerImage = document.querySelector(".container-img");
const imageC = document.querySelector(".img-show");

containerImage.addEventListener("click", () => {
	containerImage.classList.toggle("move");
	imageC.classList.toggle("show");
});

function buscarImagenes() {

	const images = document.querySelectorAll(".imgP");
  images.forEach((image) => {
    image.addEventListener("click", () => {
      addImage(image.getAttribute("src"));
    });
  });

  const addImage = (srcImage) => {
    containerImage.classList.toggle("move");
    imageC.classList.toggle("show");
    imageC.src = srcImage;
  };


}
