window.onload=()=>{
    /*oculta pageOne */
        document.getElementById("pageOne").style.display="none";
        document.getElementById("instructions").style.display="none";
        document.getElementById("recomendations").style.display="none";
        
    
    }
    
    /*Oculta botón comenzar2*/
    
    
    //**Muestra página instrucciones */
    function functionInstrucciones(){
        document.getElementById("pageZero").style.display="none";
        document.getElementById("instructions").style.display="block";
        document.getElementById("btnStart2").style.display="none"; 
    }
    /*oculta página inicial al clickear botón */
    function functionStart(){
        document.getElementById("pageZero").style.display="none";
        document.getElementById("pageOne").style.display="block";
        document.getElementById("instructions").style.display="none";
    }
    
    function functionStart2(){
        document.getElementById("instructions").style.display="none";
        document.getElementById("pageOne").style.display="block";
    
    }
    function functionInstrucciones(){
        document.getElementById("pageZero").style.display="none";
        document.getElementById("instructions").style.display="block";
    
    
    }
    
    
     function functionHome(){
        
        document.getElementById("pageOne").style.display="none";
        document.getElementById("pageZero").style.display="block";
        document.getElementById("codeBox").value="";
        document.getElementById("decodeBox").value="";
     }
      function functionCode(){
        let code=document.getElementById("codeBox").value;
        let offset=parseInt(document.getElementById("difficulty").value);
        let resultado= cipher.encode(code,offset);
        document.getElementById("decodeBox").value =resultado;
      }
    
      function functionDecode(){
          let decode=document.getElementById("codeBox").value;
          let offset=parseInt(document.getElementById("difficulty").value);
          let resultado2= cipher.decode(decode,offset);
          document.getElementById("decodeBox").value=resultado2;
      }

      function functionClear(){
          document.getElementById("codebox").value="";
          document.getElementById("decodeBox").value="";
      }