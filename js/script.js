const codify = (text, count) => {
  let codiText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].charCodeAt(0);
    codiText += String.fromCharCode(char + count);
  }
  return codiText;
};

const decodify = (text, count) => {
  let decoText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].charCodeAt(0);
    decoText += String.fromCharCode(char - count);
  }
  return decoText;
};

const codifyBase64 = (text) => {
  return btoa(text);
};

const decodyBase64 = (text) => {
  return atob(text);
};

function butaoCodificar() {
  const texto = document.getElementById("myText").value;
  const contagem = parseInt(document.getElementById("incremento").value);

  const selecinadoBase64 = document.getElementById("base64").checked;
  let codiText = "";
  if (selecinadoBase64) {
    codiText = codifyBase64(texto);
  } else {
    codiText = codify(texto, contagem);
  }
  document.getElementById("output").innerText = codiText;
}

function butaoDecodificar() {
  const texto = document.getElementById("myText").value;
  const contagem = parseInt(document.getElementById("incremento").value);

  const selecinadoBase64 = document.getElementById("base64").checked;
  let codiText = "";
  if (selecinadoBase64) {
    codiText = decodyBase64(texto);
  } else {
    codiText = decodify(texto, contagem);
  }
  document.getElementById("output").innerText = codiText;
}
