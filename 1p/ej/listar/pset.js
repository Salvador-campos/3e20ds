var arreglo=[31,1,4,2,32];
function powset(arreglo){
const maxIndex = arreglo.length - 1; 
var arrePS = [ [] ];
       arreglo.forEach(elemento => {
       arrePS.forEach(set => {
    arrePS.push([...set, elemento]);
})
})
    return arrePS;
}  
console.log(powset(arreglo));