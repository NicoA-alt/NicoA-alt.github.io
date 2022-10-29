function validarnombre(){
    valor = document.getElementById('nombre').value;
    
    if(valor.length == 0  )
    {
        document.getElementById('msj').innerHTML = "Ingrese su nombre";
        elemento = document.getElementById('nombre');
        elemento.focus(); 
        return false;
    }
    document.getElementById('mjs').innerHTML = ""
    return true;
    
}
function validarapellido(){
    valor = document.getElementById('apellido').value;
    if(valor.length == 0 )
    {
        document.getElementById('msj2').innerHTML = "Ingrese su apellido";
        elemento = document.getElementById('apellido');
        elemento.focus();
        return false;
    }
    document.getElementById('msj2').innerHTML = ""
    return true;
    
}


function validarcantidad(){
    
    valor = Number(document.getElementById("cantidad").value) ;
    console.log(valor);
            
    
        if( valor <= 0 || valor == null) 
        {
            document.getElementById('msj4').innerHTML = "Ingrese un numero valido";
            return false;
        }
    // }
    document.getElementById('msj4').innerHTML = "";
    return true;          
}
function validarcategoria(){
    
    indice = document.getElementById("categoria").selectedIndex;
            
    if( indice == null || indice == 0 ) 
    {
        document.getElementById('msj5').innerHTML = "Seleccione un categoria valida";
        return false;
    }
    document.getElementById('msj5').innerHTML = "";
    return true;    
}

function validaremail(){
    valor = document.getElementById("email").value;
            
              
            if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
            {
                document.getElementById('msj3').innerHTML = "Ingrese un correo electronico valido" ;
                elemento = document.getElementById('email');
                elemento.value = '';
                elemento.focus();
                return false;
            }
            document.getElementById('msj3').innerHTML = "" ;
            return true;          
}


function total()
{
  let cant = document.getElementById("cantidad").value;
  if(cant > 0){
    cant = cant * document.getElementById('categoria').value *200;
    document.getElementById("total").value = (`Total a pagar $ ${cant}`);
  }
  else{
    ponercero();
  }
}



function validacion() 
{
        validarnombre();
        validarapellido(); 
        validaremail();
        validarcantidad();  
        validarcategoria(); 
        total();  
}


function ponercero()
{
  document.getElementById("nombre").focus();
 document.getElementById("nombre").value="";
 document.getElementById("apellido").value="";
 document.getElementById("email").value="";
 document.getElementById("cantidad").value="";
 document.getElementById("categoria").value="";
 document.getElementsByTagName('label').value="";
 document.getElementById("total").value ="Total a pagar $";
 document.getElementById("nombre").focus;
}