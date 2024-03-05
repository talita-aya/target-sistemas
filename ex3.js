// Sequência a) 1, 3, 5, 7, ___
function proximoElementoA() {
  let ultimoNumero = 7;
  let proximoNumero = ultimoNumero + 2;
  console.log("Próximo elemento da sequência a):", proximoNumero); //9
}

// Sequência b) 2, 4, 8, 16, 32, 64, ____
function proximoElementoB() {
  let ultimoNumero = 64;
  let proximoNumero = ultimoNumero * 2;
  console.log("Próximo elemento da sequência b):", proximoNumero); //128
}

// Sequência c) 0, 1, 4, 9, 16, 25, 36, ____
function proximoElementoC() {
  let ultimoNumero = 36;
  let numeroAux = Math.sqrt(ultimoNumero, 2) + 1;
  let proximoNumero = Math.pow(numeroAux, 2);
  console.log("Próximo elemento da sequência c):", proximoNumero); //49
}

// Sequência d) 4, 16, 36, 64, ____
function proximoElementoD() {
  let ultimoNumero = 64;
  let numeroAux = Math.sqrt(ultimoNumero) + 2;
  let proximoNumero = Math.pow(numeroAux, 2);
  console.log("Próximo elemento da sequência d):", proximoNumero); //100
}

// Sequência e) 1, 1, 2, 3, 5, 8, ____
function proximoElementoE() {
  let ultimoNumero1 = 5;
  let ultimoNumero2 = 8;
  let proximoNumero = ultimoNumero1 + ultimoNumero2;
  console.log("Próximo elemento da sequência e):", proximoNumero); //13
}

// Sequência f) 2, 10, 12, 16, 17, 18, 19, ____
function proximoElementoF() {
  console.log("Próximo elemento da sequência e): 200"); //numeros que começam com a letra D (quando escritos por extenso)
}

proximoElementoA();
proximoElementoB();
proximoElementoC();
proximoElementoD();
proximoElementoE();
proximoElementoF();
