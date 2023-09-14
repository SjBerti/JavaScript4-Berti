const body = document.body;
const constBotonModo = document.getElementById("BotonModo");

// Aqui ocurre la magia
constBotonModo.addEventListener("click", () => {body.classList.toggle("dark-mode");

// Verifica si el modo oscuro está activado
const isDarkMode = body.classList.contains("dark-mode");
  
// Actualiza el texto del botón y el emoji en función del modo
if (isDarkMode) {constBotonModo.textContent = "👨🏻";} else {constBotonModo.textContent = "👨🏾";}});



// Obtener elementos del DOM
const miTextoInput = document.getElementById("miTexto");
const miBoton = document.getElementById("miBoton");
const resultadoDiv = document.getElementById("resultado");

// Agregar un evento click al botón
miBoton.addEventListener("click", function () {
    const texto = miTextoInput.value;
    resultadoDiv.innerHTML = `Texto introducido: ${texto}`;
    miTextoInput.value = ""; // Limpiar el campo de texto después de mostrar el resultado
});
