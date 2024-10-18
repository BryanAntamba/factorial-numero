//Definimos variables
//la variabñe factorial tendra de valor 1 y la variable numero1 sera ingresado su valor por el usuario.
var factorial = 1;
var numero1 = prompt("Ingresa el numero que deseas calcular su factorial, si no desea realizar el factorial apriete el boton cancelar");
//ingresaremos un  if cuando el usuario desida cancelar el proceso el cual sera un valor nulo
//Se le llegara un mensaje de que no ingreso un valor por lo tanto es un valor nulo.
if (numero1 === null) {
    alert("No ingreso un valor para la operacion para realizar el factorial. Fin de la ejecucion");
    //else especifica que la variable numero1 sera transformarlo en numero entero.
    //parseInt tiene como funcion transformar una variable de tipo caracter, decimal en numero entero.
} else {
    numero1 = parseInt(numero1);
//if especifica que detectara si la variable fue definida de tipo caracter por el usuario
//si la variable numero1 tienevalor de caracter la condicion de cumple y le llegar el mensaje de alerta.
} if (isNaN(numero1)) {
    alert("No se aceptan caracteres ni palabras. Un factorial nunca realiza operaciones con caracteres. Debe ingresa un numero entero positivo");
    //else if muestra que si ni las condiciones anteriores no se cumplieron visualizara el proceso de realizar el factorial
    //ya que el usuario ingreso un valor de tipo entero negativo lo cual le llegara un mensaje de alerta con las indicaciones.
} else if (numero1 < 1) {
    alert("No se puede realizar factoriales con numeros negativos, solo se puede sacar el factorial con numeros positivos");
    //else indica que si el usuario ingreso un numero entero positivo directamente pasa al bucle for para realizar el proceso del factorial.
} else {
    //defino una variable que tendra de valor 1, la variable numero2 ser menor igal a la variable1, numero2 incrementara de 1.
    for (var numero2 = 1; numero2 <= numero1; numero2++) {
        //la variable factorial convalor uno multiplicara el valor de la variable numero2 que indicara que sera igual.
        factorial *= numero2;
        //Visualizacion del proceso del factorial del numero ingresado por el usuario
        document.write("<br>" + "Tu resultado es: " + numero2 + "=" + factorial + "<br>");
    }
    //Mensaje de la ejecucion del buble for al terminar la calculacion.
    alert("factorial:" + numero2 + "=" + factorial);
}