const color = document.getElementsByClassName('habilidades-item');
const colorv2 = document.getElementsByClassName('habilidades-itemv2');
const boton = document.querySelector('#boton-habilidades');
const barra = document.getElementById('barra')
const barra_lista = document.getElementById('barra-lista');

let cambio = false;

boton.addEventListener('click',  () => {
    i = 0
    if(cambio == false){
        while(color[i] != undefined && color[i].classList.value == 'habilidades-item')
            color[i].classList.value = 'habilidades-itemv2';
    }else{
        while(colorv2[i] != undefined && colorv2[i].classList.value == 'habilidades-itemv2')
            colorv2[i].classList.value = 'habilidades-item';
    }
    console.log("color")
    console.log(color)
    console.log("colorv2")
    console.log(colorv2)
    cambio = !cambio;
});

window.addEventListener('scroll', () =>{
    barra.classList.toggle('barra-scroll', window.scrollY > 680);
} )

function funcion(){
    if(barra_lista.classList.value === '')
        barra_lista.classList.value = 'barra-click'
    else
        barra_lista.classList.value = ''
}