

/* - Llaves" de encriptación:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 

- Para desencriptación utilizaremos las mismas a la inversa.
- No se aceptan acentos ni símbolos (RegExp).

- Botones de "code" / "decode" y "reset".
- Botón de "copiar" desde el campo "OUT".

*/

function codeMsg() {
  var coding = document.getElementById("userInput").value;
  // reglas de encriptado -->
  var codeMsg = conding.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.getElementById("outputText").value = coding;
  document.getElementById("userInput").value = " ";
  console.log(codeMsg);
};

function decodeMsg() {
  var decoding = document.getElementById("outputCode").value;
  var decodeMsg = decoding.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.getElementById("outputCode").value = decoding;
  console.log(decodeMsg);
  document.getElementById("outputCode").value = " ";
};

function copy(){
  var copyText = document.querySelector("#copy-Button");
  copyText.select;
  Document.execCommand("copy");
};


var codeButton = document.querySelector("#code-Button");
codeButton.addEventListener("click", function (event) {
  event.preventDefault()
  codeMsg();

});

var decodeButton = document.querySelector("#decode-Button");
decodeButton.addEventListener("click", function (event) {
  event.preventDefault();
  decodeMsg();
});

var copyButton = document.querySelector("#copy-Button");
copyButton.addEventListener("click",function (event) {
  event.preventDefault();
  copy();
});


// <form action="">

//               <input class="mensajeUsuario" type="text" id="mensajeUsuario" placeholder="Ingrese su texto aqui" />
//               <h1>Encriptador de mensajes</h1>
//               <h4>
//                   <img class="advertencia" src="img/Vector.svg" alt="advertencia" />
//                   Solo letras en minusculas y sin acento
//               </h4>

//               <input class="salidaMensaje" type="text" id="salidaMensaje" placeholder="Su texto encriptado" />
//               <button type="submit" class="btn" id="btn-encriptar">Encriptar</button>
//               <button type="submit" class="btn" id="btn-desencriptar">Desencriptar</button>
//               <button type="submit" class="btn" id="btn-copiar">Copiar</button>

//           </form>