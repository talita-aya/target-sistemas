function pertenceSequenciaFibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === 0 || numero === 1) {
      console.log("O número informado pertence à sequência de Fibonacci.");
      return;
  }

  let c;
  while (true) {
      c = a + b;
      if (c === numero) {
          console.log("O número informado pertence à sequência de Fibonacci.");
          return;

      } else if (c > numero) {
          console.log("O número informado NÃO pertence à sequência de Fibonacci.");
          return;
      }

      a = b;
      b = c;
  }
}

const numeroVerificar = 4; //número para ser verificado

pertenceSequenciaFibonacci(numeroVerificar);
