function NumDeDigitos(num) {

    if (num === 0) {

      return 1;

    }

    let contador = 0;

    while (num !== 0) {

      num = Math.floor(num / 10);

      contador++;

    }

    return contador;

    /*
    Math.floor : redondea un numero al multiplo o al entero inferior mas proximo de la cifra significativa especificada.

    Explicacion del while: Cuando el usuario agrega un numero, por ejemplo 123. El while lo que hace es basicamente dividirlo por 
    10 y despues aplicar el mathfloor para redondear el numero a la cifra mas cercana (si queda por ejemplo 1.25 se redondea a 1).
    De esta forma se elimina uno de los numeros, en este caso de 123 pasa a ser 12, y de 12 pasa a ser 1, de 1 a 0 y termina el 
    bucle. De esta manera se puede decir que se eliminan las cifras una por una, y el contador se encarga de ir contando las veces 
    que el da una vuelta hasta quedar en 0, asi contando las veces que el mismo dividio al numero original dando por resultado la 
    cifra de digitos del numero original
    */
  }