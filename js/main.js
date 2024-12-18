//Selecciona el elemento HTML conla clase "slider"

const slider = document.querySelector(".slider");

//Selecciona todos los elementos con la clase "slide"
const slide = document.querySelectorAll(".slide");

//Seleciona la flecha izquierda del control del slider
const flechaIzquierda = document.querySelector(".controls i:nth-child(1)");

//Seleciona la flecha derecha del control del slider
const flechaDerecha = document.querySelector(".controls i:nth-child(2)");

//Selecciona el contenedor de puntos
const pointsWrapper = document.querySelector(".points");

///Selecciona todos los puntos dentro del contenedor de puntos
const points = document.querySelectorAll(".points span");

//Inicializa el indice del slide actual
let slideIndex = 0;

//Itera sobre cada punto y agrega un evento de clic a cada uno

points.forEach((point, indice) => {
  point.addEventListener("click", () => {
    //Paso 1: Actualiza el indice del slide al indice del punto clicado
    slideIndex = indice;
    console.log(slideIndex);

    //Paso 3 Remueve la clase "active" del punto actualmente activo
    document.querySelector(".points .active").classList.remove("active");

    //Paso 2: Actualiza la posicion del slider para mostrar el slide correspondiente
    slider.style.transform = `translateX(${slideIndex * -20}%)`;

    // Agrega la clase 'active' al punto clicado para resaltarlo
    point.classList.add("active");
  });
});

//Agrega un evento de clic a la flecha izquierda
flechaIzquierda.addEventListener("click", () => {
  //paso 1. actualiza el inidice del slide, asegurandose de no ir mas alla del primer slide
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;

  //Paso 2 Remueve la clase "active" del punto actualmente activo
  document.querySelector(".points .active").classList.remove("active"); //paso 3. remoueve  la clase

  //paso 3 actualiza la posicion del slider para mostrar el slder correspondiente
  slider.style.transform = `translateX(${slideIndex * -20}%)`;

  // pasa la clase 'active' al punto correspondiente al nuevo slide
  pointsWrapper.children[slideIndex].classList.add("active");
});

//Agrega un evento de clic a la flecha derecha
flechaDerecha.addEventListener("click", () => {
  //paso 1. actualiza el inidice del slide, asegurandose de no ir mas alla del primer slide
  console.log(`slideIndex${slideIndex},${slide.length}`);
  slideIndex =
    slideIndex < slide.lenght - 1 ? slideIndex + 1 : slide.length - 1;
  console.log(`slideIndex${slideIndex},${slide.length}`);
  //Paso 2 Remueve la clase "active" del punto actualmente activo
  document.querySelector(".points .active").classList.remove("active"); //paso 3. remoueve  la clase

  //paso 3 actualiza la posicion del slider para mostrar el slder correspondiente
  slider.style.transform = `translateX(${slideIndex * -20}%)`;

  // pasa la clase 'active' al punto correspondiente al nuevo slide
  pointsWrapper.children[slideIndex].classList.add("active");
});
