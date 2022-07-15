saludar()

function saludar ()
    {
        
        let nombre = prompt("ingresa tu nombre")
        let apellido = prompt("Ingresa tu apellido")
        alert(`Bienvenido a nuestro login, ${nombre+ " " +apellido}`);
    }


validar()
function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("contraseña").value;	

			if(usuario == "camila" && Contraseña == "1234")
			{
				alert("Usuario y Contraseña validos");
			}
			else
			{
				alert("Verifique su usuario y contraseña");
			}
		}

