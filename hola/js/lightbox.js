const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute('src'))
    })
})

//for (let i = 0; i < imagenes.length; i++) {
  //  const imagen = imagenes[i];
    //imagen.addEventListener('click', () => {
      //aparecerimagen(imagen.getAttribute('src'));
    //});
 // }

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showimagen')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerimagen = (imagen)=>{
    imageneslight.src = imagen
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showimagen')
    hamburguer1.style.opacity = '0'
}