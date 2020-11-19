var arreglo = [];
var a = new Map();
var n = 77,i;
var s = 1;
    for ( i = 1; i < n+1; i++) {
        
    arreglo[i-1] = 'nombre'+i;
        
}

    for( i = n-1; i > -1  ; i--){
    var j = Math.floor(Math.random() * i)
    var aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
    a.set(s,arreglo[i]);
    s++;
}       
console.log(a);