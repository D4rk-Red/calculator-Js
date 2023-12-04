// Variable para almacenar la expresión en la pantalla de la calculadora
let pantalla = '';

// Función para obtener el valor de los dígitos y el punto decimal
function obtenerValor(elemento) {
  pantalla += elemento.textContent;
  actualizarPantalla();
}

// Función para obtener operadores (+, -, *, /)
function obtenerOperador(operador) {
  pantalla += ' ' + operador + ' ';
  actualizarPantalla();
}

// Función para realizar el cálculo al presionar "="
function calcular() {
  try {
    pantalla = eval(pantalla); // Utilizando eval para evaluar la expresión matemática
    actualizarPantalla();
  } catch (error) {
    pantalla = 'Error'; // Manejo de errores en caso de una expresión inválida
    actualizarPantalla();
  }
}

function limpiarPantalla() {
    pantalla = '';
    actualizarPantalla();
}

// Función para actualizar el contenido de la pantalla
function actualizarPantalla() {
  // Muestra la pantalla en un elemento HTML con id "pantalla"
  var pantallaElemento = document.getElementById('pantalla');
  pantallaElemento.textContent = pantalla;
}

