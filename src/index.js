const hamburger = document.querySelector('.span2')
const loginSection = document.querySelector('.loginSection')
const navegacion = document.querySelector('.navegacion')
const span1 = document.querySelector('.span1')

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
  } else {
    loginSection.style.display = ''
    navegacion.style.display = ''
  }
  isHamburguerOn = !isHamburguerOn
})

function restoreDefaultStyles(){
  loginSection.style.display = ""
  navegacion.style.display = ""
}

window.addEventListener('resize', () => {
  const newScreenWidth = window.innerWidth;

  if (newScreenWidth <= 768) {
    restoreDefaultStyles();
  }else if(newScreenWidth < 1023 && newScreenWidth > 768){
    restoreDefaultStyles();
  }else {
    loginSection.style.display = "flex"
    navegacion.style.display = "flex"
  }
});