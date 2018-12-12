window.cipher = {
    encode: (code, offset) => {
        let result = "";
        for (let i = 0; i < code.length; i++) {
            // let newCode = code
            let ascii = code.charCodeAt(i);
            if (ascii === 32) {
                result += " "
                continue;
            } else if (code[i] === "ñ") {
                result += "ñ"
                continue;
            } else if (code[i] === "Ñ") {
                result += "Ñ"
                continue;
            } else if (code[i] === "¡") {
                result += "¡"
                continue;
            } else if (code[i] === "¿") {
                result += "¿"
                continue;
            } else if ((code >= 32) && (code <= 126));
            let formula = ((ascii - 32 + parseInt(offset)) % 94) + 32;
            let nuevoAscii = String.fromCharCode(formula);
            result += nuevoAscii;

        }
        return result;
    },




    decode: (decode, offset) => {
        let resultado2 = "";
        for (let i = 0; i < decode.length; i++) {
            // let newCodeD = decode
            let asciiD = decode.charCodeAt(i);
            if (asciiD === 32) {
                resultado2 += " "
                continue;
            } else if (decode[i] === "ñ") {
                resultado2 += "ñ"
                continue;
            }
            else if (decode[i] === "Ñ") {
                resultado2 += "Ñ"
                continue;
<<<<<<< HEAD
            } else if (decode[i] === "¡") {
                resultado2 += "¡"
                continue;
            } else if (decode[i] === "¿") {
                resultado2 += "¿"
=======
            }else if (decode[i]==="¡"){
                resultado2+="¡"
                continue;
            }else if(decode[i]==="¿"){
                resultado2+="¿"
>>>>>>> gh-pages
                continue;
            } else if ((decode <= 126) && (decode >= 32));
            let formula = ((asciiD - 126 - parseInt(offset)) % 94) + 126;
            let nuevoAsciiD = String.fromCharCode(formula);
            resultado2 += nuevoAsciiD

        }
        return resultado2;
    },







}