"use strict";

let resultEncrypt;
let insertedText;
const buttonEncrypt = document.querySelector(".button-encrypt");
const buttonDecrypt = document.querySelector(".button-decrypt");
const textArea1     = document.querySelector(".text-area1");
const textArea2     = document.querySelector(".text-area2");
const buttonCopy    = document.querySelector(".button-copy"); 

const removeAccent = function(string) {
    return string.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}

const encrypt = function(string) {
    let encrypt;
    encrypt = string.replace(/e/g, "enter");
    encrypt = encrypt.replace(/i/g, "imes");
    encrypt = encrypt.replace(/a/g, "ai");
    encrypt = encrypt.replace(/o/g, "ober");
    encrypt = encrypt.replace(/u/g, "ufat");
    return encrypt;
}

const decrypt = function(str) {
    let decrypt;
    decrypt = str.replace(/enter/g, "e");
    decrypt = decrypt.replace(/imes/g, "i");
    decrypt = decrypt.replace(/ai/g, "a");
    decrypt = decrypt.replace(/ober/g, "o");
    decrypt = decrypt.replace(/ufat/g, "u");
    return decrypt;
}

buttonEncrypt.addEventListener("click", function() {
    insertedText = removeAccent(textArea1.value.toLowerCase());
    const result = encrypt(insertedText);
    textArea2.value = result;
    
    if (textArea1.value) {
        textArea1.value = "Criptografado com sucesso!";
        setTimeout(function () {textArea1.value = ""}, 1200)
    } else {
        textArea1.value = "Insira um texto válido!"
        setTimeout(function () {textArea1.value = ""}, 1200);
    }
})

buttonDecrypt.addEventListener("click", function() {
    insertedText = removeAccent(textArea1.value.toLowerCase());
    const result = decrypt(insertedText);
    textArea2.value = result;
    
    if (textArea2.value) {
        textArea1.value = "Descriptografado com sucesso!";
        setTimeout(function () {textArea1.value = ""}, 1200);
    } else {
        textArea1.value = "Insira um texto válido!";
        setTimeout(function () {textArea1.value = ""}, 1200);
    }
})

buttonCopy.addEventListener("click", function() {
    if (textArea2.value) {
        textArea2.select();
        document.execCommand("cut");
        textArea2.value = "Texto copiado com sucesso!"
        setTimeout(function() {textArea2.value = ""}, 1200)    
    } else {
        textArea2.value = "Não há nada para copiar!"; 
        setTimeout(function() {textArea2.value = ""}, 1200);
    }
})
