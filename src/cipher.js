//função para pegar offset, message para cifrar
function cripto() {
    let message = document.getElementById("enterText").value;
    let offset = parseInt(document.getElementById("enterOffset").value);
    let criptoMessage = cipher(offset, message);
    document.getElementById("resultAnswerCripto").innerHTML = criptoMessage;
}

//função para pegar offset, message para cifrar
function descripto() {
    let message = document.getElementById("enterText").value;
    let offset = parseInt(document.getElementById("enterOffset").value);
    let descriptoMessage = decipher(offset, message);
    document.getElementById("resultAnswerDecripto").innerHTML = descriptoMessage;
}

//função para cifrar
function cipher(offset, message) {
    let resultMessage = "";
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            code = (((message.charCodeAt(i) - 65) + offset % 26) + 26) % 26 + 65;
        } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
            code = (((message.charCodeAt(i) - 97) + offset % 26) + 26) % 26 + 97;
        } else if (message.charCodeAt(i) === 32) {
            code = 32;
        }
        else if (!(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 || message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122 )){
            code = message.charCodeAt(i);
        }
        resultMessage += String.fromCharCode(code);
    }
    return resultMessage;
}
//função para descifrar
function decipher(offset, message) {
    let resultMessage = "";
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            code = (((message.charCodeAt(i) - 65) - offset % 26) +26) % 26 + 65;
        } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
            code = (((message.charCodeAt(i) - 97) - offset % 26) + 26) % 26 + 97;
        } else if  (message.charCodeAt(i) === 32) {
            code = 32;
        }
        else if (!(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 || message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122 )){
            code = message.charCodeAt(i);
        }
        resultMessage += String.fromCharCode(code);
    }
    return resultMessage;
}