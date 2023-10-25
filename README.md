# Navbar Responsivo con Menú Desplegable

Este proyecto es un ejemplo de un Navbar (barra de navegación) responsivo que se
adapta a computadoras, tablets y dispositivos móviles. Incluye un menú
desplegable estilo hamburguesa para facilitar la navegación en pantallas
pequeñas.

## Descripción

Un navbar es esencial para la navegación en un sitio web. Este proyecto ofrece
una solución responsiva que cambia el diseño y el comportamiento según el tamaño
de la pantalla. Se incluye un menú desplegable tipo hamburguesa para
dispositivos móviles, lo que mejora la experiencia del usuario.

## Funcionalidades Clave

- Un menú de navegación se muestra en la parte superior en computadoras.
- En tablets, el menú se adapta para ocupar menos espacio.
- En dispositivos móviles (ancho de pantalla menor a 768px), se oculta el menú.
- Se agrega un botón de hamburguesa que despliega el menú al hacer clic.
- El menú se pliega nuevamente al hacer clic en un elemento de la lista o fuera
  del menú.

## Tecnologías Utilizadas

- HTML
- CSS (para estilos responsivos)
- JavaScript (para funcionalidad del menú)

## Código de Ejemplo

### HTML

```html
<nav>
  <h1>Logo</h1>
  <ul class="navegacion">
    <a href="#">Services</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </ul>
  <ul class="loginSection">
    <li>Search</li>
    <li>Sign Up</li>
    <li>Login</li>
  </ul>

  <span class="span1">More</span>
  <span class="span2">
    <!-- icon hamburguer -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="hamburger"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
    <!-- icon close X -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="X"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  </span>
</nav>
```

### JavaScript

```JavaScript
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
```
