

/* reglas de encriptación:

"a" = "ai"
"e" = "enter"
"i" = "imes"
"o" = "ober"
"u" = "ufat" 

- Para desencriptación utilizaremos las mismas reglas a la inversa.

- Botones de "code", "decode" y "reset" para el campo "IN".
- Botón de "copy" y "reset" para el campo "OUT".

*/

function codeMsg() {
  var coding = document.getElementById("userInput").value;
  var codeMsg = coding.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.getElementById("outputCode").value = codeMsg;
  console.log(codeMsg);
  document.getElementById("userInput").value = coding;
};

function decodeMsg() {
  var decoding = document.getElementById("userInput").value;
  var decodeMsg = decoding.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.getElementById("outputCode").value = decodeMsg;
  console.log(decodeMsg);
  document.getElementById("userInput").value = decoding;
};

function copyToClipBoard() {
  var content = document.getElementById("outputCode");

  content.select();
  document.execCommand("copy");

  alert("copied");

}

function eraseText() {
  document.getElementById("outputCode").value = "";
}



// --- variables ------>

var codeButton = document.querySelector("#codeButton");
codeButton.addEventListener("click", function (event) {
  event.preventDefault()
  codeMsg();

});

var decodeButton = document.querySelector("#decodeButton");
decodeButton.addEventListener("click", function (event) {
  event.preventDefault();
  decodeMsg();
});