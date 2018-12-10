window.cipher = {
    encode: (code, offset) => {
        let result = "";
        for (let i = 0; i < code.length; i++) {
            let newCode = code.toUpperCase();
            let ascii = newCode.charCodeAt(i);
            if (ascii === 32) {
                result += " "
                continue;
            }
            let formula = ((ascii - 65 + parseInt(offset)) % 26) + 65;
            let nuevoAscii = String.fromCharCode(formula);
            result += nuevoAscii;

        }
        return result;
    },




    decode: (decode, offset) => {
        let resultado2 = "";
        for (let i = 0; i < decode.length; i++) {
            let newCodeD = decode.toUpperCase();
            let asciiD = newCodeD.charCodeAt(i);
            if (asciiD === 32) {
                resultado2 += " "
                continue;
            }
            let formula = ((asciiD - 90 - parseInt(offset)) % 26) + 90;
            let nuevoAsciiD = String.fromCharCode(formula);
            resultado2 += nuevoAsciiD;

        }
        return resultado2;
    },







}