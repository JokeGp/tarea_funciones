function generarTabla() {
    var numero = document.getElementById('numero').value;
    var limite = document.getElementById('limite').value;
    var resultado = '';
    for(let i = 1; i <= limite; i++) {
      resultado += `${numero} * ${i} = ${numero * i}<br>`;
    }
    document.getElementById('resultadoTabla').innerHTML = resultado;
  }

  function verificarPrimo() {
    var numero = document.getElementById('numeroPrimo').value;
    var esPrimo = true;
    for(let i = 2; i < numero; i++) {
      if(numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
    esPrimo = numero > 1 && esPrimo;
    document.getElementById('resultadoPrimo').innerHTML = esPrimo ? 'Es primo' : 'No es primo';
  }

  function calcularFactorial() {
    var numero = document.getElementById('numeroFactorial').value;
    var factorial = 1;
    for(let i = 2; i <= numero; i++) {
      factorial *= i;
    }
    document.getElementById('resultadoFactorial').innerHTML = factorial;
  }