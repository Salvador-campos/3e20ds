function i10e6(){
    var tinicio = new Date();
    var de6 = [];
      for (let index = 0; index <= 999999; index++) {
        de6.push(Math.round(Math.random()*1000000)); 
      }
    
    const oInsercion = (numeros) =>{
      for (var i = 1; i < numeros.length; i++){
        var j = i -1;
        let aux = numeros[i];
        while (j >=0 && numeros[j] > aux){
          numeros[j + 1] = numeros[j]
          j--
        }
        numeros[j+1] = aux
      }
      return numeros
    }
console.log("numeros");
console.log(de6)
console.log("numeros acomodados:");
console.log(oInsercion(de6));
console.log("fueron 999999 inversiones");
var final = new Date() - tinicio;
console.info('Tiempo que tardo el programa: ', final/1000 + " segundos.");
console.log("se podria  mejorar el tiempo con otro metodo de iteracion que sea mas efectivo o use menos pasos.")
    }
i10e6();