const arreglo = new Map([]);
console.time();
for(i=4;i<7;i++){
    arreglo.set("10e"+i,Math.pow(10,i));
}
console.log(arreglo);
console.timeEnd();


