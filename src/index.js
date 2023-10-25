const hamburger = document.querySelector('.span2')
const loginSection = document.querySelector('.loginSection')
const navegacion = document.querySelector('.navegacion')
const span1 = document.querySelector('.span1')
const iconHamburger = document.querySelector('.hamburger')
const iconX = document.querySelector('.X')

let isHamburguerOn = true
let isMoreOn = true

// Tabletas
span1.addEventListener('click', e => {
  if (isMoreOn) {
    loginSection.style.display = 'flex'
  } else {
    loginSection.style.display = 'none'
  }
  isMoreOn = !isMoreOn
})

// Celulares
hamburger.addEventListener('click', e => {
  if (isHamburguerOn) {
    loginSection.style.display = 'block'
    navegacion.style.display = 'block'
    iconX.style.display = 'flex'
    iconHamburger.style.display = "none"
  } else {
    loginSection.style.display = ''
    navegacion.style.display = ''
    iconX.style.display = ''
    iconHamburger.style.display = ''
  }
  isHamburguerOn = !isHamburguerOn
})

/**
 * Procedimiento que resetear los estilos a display: "none" 
 * también resetea el menu hamburguesa
 * @param {void}
 */
function restoreDefaultStyles(){
  loginSection.style.display = ""
  navegacion.style.display = ""
  iconHamburger.style.display = "flex"
  iconX.style.display = "" 
}

window.addEventListener('resize', () => {
  const newScreenWidth = window.innerWidth;

  if (newScreenWidth <= 768) {
    restoreDefaultStyles()
  }else if(newScreenWidth < 1023 && newScreenWidth > 768){
    restoreDefaultStyles();
  }else {
    loginSection.style.display = "flex"
    navegacion.style.display = "flex"
  }
});