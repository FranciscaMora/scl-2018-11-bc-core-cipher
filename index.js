window.onload = () => {
    /*oculta pageOne */
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("instructions1").style.display = "none";
    document.getElementById("intro2P").style.display = "none";


}

/*Oculta botón comenzar2*/


//**Muestra página instrucciones */
document.getElementById("btnInstructions").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("pageZero").style.display = "none";
    document.getElementById("intro2P").style.display = "block";
    document.getElementById("btnStart2").style.display = "none";
})
/*oculta página inicial al clickear botón */
document.getElementById("btnStart").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("pageZero").style.display = "none";
    document.getElementById("pageOne").style.display = "block";
    document.getElementById("instructions1").style.display = "none";
    document.getElementById("intro2P").style.display="none";
})

document.getElementById("btnSomos").addEventListener("click",(evento)=>{
    evento.preventDefault();
    document.getElementById("pageOne").style.display="none";
    document.getElementById("pageZero").style.display="none";
    document.getElementById("instructions1").style.display="block";
});
document.getElementById("btnStart2").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("instructions1").style.display = "none";
    document.getElementById("pageOne").style.display = "block";

})

document.getElementById("btnStart3").addEventListener("click",(evento)=>{
    evento.preventDefault();
    document.getElementById("intro2P").style.display="none";
    document.getElementById("pageOne").style.display="block";

})

document.getElementById("instrucciones9").addEventListener("click",(evento)=>{
    evento.preventDefault();
    document.getElementById("instructions1").style.display="none";
    document.getElementById("intro2P").style.display="block";
})




document.getElementById("btnHome").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("pageZero").style.display = "block";
    document.getElementById("codeBox").value = "";
    document.getElementById("decodeBox").value = "";
})

document.getElementById("btnCode").addEventListener("click", (evento) => {
    evento.preventDefault();
    let code = document.getElementById("codeBox").value;
    let offset = parseInt(document.getElementById("difficulty").value);
    let resultado = cipher.encode(code, offset);
    document.getElementById("decodeBox").value = resultado;
})

document.getElementById("btnDecode").addEventListener("click", (evento) => {
    evento.preventDefault();
    let decode = document.getElementById("codeBox").value;
    let offset = parseInt(document.getElementById("difficulty").value);
    let resultado2 = cipher.decode(decode, offset);
    document.getElementById("decodeBox").value = resultado2;
})

document.getElementById("clear").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("difficulty").value = "";
    document.getElementById("codeBox").value = "";
    document.getElementById("decodeBox").value = "";
})