/* Menu de hamburgues */

const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click',() => {
    navMenu.classList.toggle('nav-menu_visible')
})

/* Ocultar proyectos */

function mostrarIA(){
    document.getElementById('ia-proyectos').style.display = 'grid';
    document.getElementById('web-proyectos').style.display = 'none';
    document.getElementById('escritos-proyectos').style.display = 'none';
    document.getElementById('dibujos-proyectos').style.display = 'none';

    document.getElementById('ia').style.color = 'var(--rosa)';
    document.getElementById('web').style.color = 'var(--gris-claro)';
    document.getElementById('escritos').style.color = 'var(--gris-claro)';
    document.getElementById('dibujos').style.color = 'var(--gris-claro)';
}

function mostrarWeb(){
    document.getElementById('ia-proyectos').style.display = 'none';
    document.getElementById('web-proyectos').style.display = 'grid';
    document.getElementById('escritos-proyectos').style.display = 'none';
    document.getElementById('dibujos-proyectos').style.display = 'none';

    document.getElementById('ia').style.color = 'var(--gris-claro)';
    document.getElementById('web').style.color = 'var(--rosa)';
    document.getElementById('escritos').style.color = 'var(--gris-claro)';
    document.getElementById('dibujos').style.color = 'var(--gris-claro)';
}

function mostrarEscritos(){
    document.getElementById('ia-proyectos').style.display = 'none';
    document.getElementById('web-proyectos').style.display = 'none';
    document.getElementById('escritos-proyectos').style.display = 'grid';
    document.getElementById('dibujos-proyectos').style.display = 'none';

    document.getElementById('ia').style.color = 'var(--gris-claro)';
    document.getElementById('web').style.color = 'var(--gris-claro)';
    document.getElementById('escritos').style.color = 'var(--rosa)';
    document.getElementById('dibujos').style.color = 'var(--gris-claro)';
}

function mostrarDibujos(){
    document.getElementById('ia-proyectos').style.display = 'none';
    document.getElementById('web-proyectos').style.display = 'none';
    document.getElementById('escritos-proyectos').style.display = 'none';
    document.getElementById('dibujos-proyectos').style.display = 'grid';

    document.getElementById('ia').style.color = 'var(--gris-claro)';
    document.getElementById('web').style.color = 'var(--gris-claro)';
    document.getElementById('escritos').style.color = 'var(--gris-claro)';
    document.getElementById('dibujos').style.color = 'var(--rosa)';
}

