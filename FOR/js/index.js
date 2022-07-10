/*a) realizar un programa que contenga un bucle FOR. 
Este se tratara de que el usuario ingrese el numero que desea saber los 
los pares

Version 1: SOLO ME MUESTRA LOS NUMEROS PARES HASTA DONDE EL USUARIO INGRESO SU VALOR
let numeroFin = Number(prompt("Ingrese un numero"));

for(let i=0; i=numeroFin; i++)
{
    if(i%2==0){
        console.log(i)
        
    }
}

Version 2: PARA NO  INGRESAR STRING O NULL
let numFin = prompt(`Ingrese un numero `);

let num = [''];

if (numFin == null || numeroFin == '') {

  alert('Debes introducir un valor numerico');
}

for (let i = 0; i <= paresalerta; i++) {
  if (i % 2 == 0) {
    console.log (i)
  }

}
*/

let numeroFin = Number(prompt("Ingrese un numero"));

for(let i=0; i<=numeroFin; i++)   /**for(let i=0; i=numeroFin; i++) ==> TENIA UN BUCLE INFINITO. Porque me falta <= */
{
    if(i%2==0){
        console.log(i)
        
    }
}

