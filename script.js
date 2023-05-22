const textoinsertado = document.querySelector(".areatexto");
const mensaje = document.querySelector(".mensajeencriptado");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptaboton(){
  const textoEncriptado = encriptar(textoinsertado.value)
  mensaje.value = textoEncriptado
  textoinsertado.value = "";
  mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptado
}

function desencriptaboton(){
  const textoDesencriptado = desencriptar(textoinsertado.value)
  mensaje.value = textoDesencriptado
  textoinsertado.value = "";
}

function desencriptar(stringDesencriptado){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++){
    if (stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptado
}


const $textoencriptado = document.getElementById("pcnoencontrado"),
      $botoncopiar = document.getElementById("botoncopiar");

$botoncopiar.addEventListener("click", copiarportapapeles);

function copiarportapapeles(){
  $textoencriptado.select();
  document.execCommand("copy");
}
