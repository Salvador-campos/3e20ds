function i10e4(){
var tinicio = new Date();
var de4 = [];
  for (var s = 0; s <= 9999; s++) {
             
          de4.push(Math.round(Math.random()*10000)); 
      }
const oInsercion = (numeros) =>{
    for (var i = 1; i < numeros.length; i++){
var j = i -1;
var aux = numeros[i];
    while (j >=0 && numeros[j] > aux){
          numeros[j + 1] = numeros[j]
          j--
        }
        numeros[j+1] = aux
      }
            return numeros
    }
console.log(" numeros");
console.log(de4)
console.log(" numeros acomodados");
console.log(oInsercion(de4));
console.log("fueron 9999 iteraciones o inversiones");
var final = new Date() - tinicio;
console.info('tiempo que tardo el programa: ', final/1000 + " segundos.");
console.log("se podria  mejorar el tiempo con otro metodo de iteracion que sea mas efectivo o use menos pasos .");
    }
i10e4();