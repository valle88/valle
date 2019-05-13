function incripcion(){
     var correo = document.getElementById("correo").value;
    var arroba = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    var nomail = "";
    
    if(arroba.test(correo)){
        for(var i = 0; i < correo.length; i++){
            if(correo[i] == "@"){
                for(i; i < correo.length; i++){
                    if(correo[i] != "."){
                        nomail += correo[i];
                       document.getElementById("exacto").innerHTML ="Bienvenida";
                       break;
                    }
                    else{
                       
                        break;
                    }
                }
                
            }

        }     
    }
    
    
}





