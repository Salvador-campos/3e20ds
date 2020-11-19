function i10e5(){
var tinicio = new Date();
var de5 = [];
    for (var k = 0; k <= 99999; k++) {
          de5.push(Math.round(Math.random()*100000)); 
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
console.log("numeros");
console.log(de5);
console.log("numeros acomodados");
console.log(oInsercion(de5));
console.log("fueron  99999 inversiones");
var final = new Date() - tinicio;
console.info("Tiempo que tardo el programa: ", final/1000 + " segundos.");    
console.log("se podria  mejorar el tiempo con otro metodo de iteracion que sea mas efectivo o use menos pasos.")
}
i10e5();