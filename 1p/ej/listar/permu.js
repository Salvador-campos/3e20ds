var arreglo=[31,1,4,2,32];
function permu (datoe) { 
var arregpe =[]; 
function permuAR (arr, dato) { 
var cam, aux = dato || []; 
    for (var i = 0; i < arr.length; i++) { 
        cam = arr.splice(i, 1)[0]; 
    if (arr.length === 0) {
        arregpe.push(aux.concat([cam]));
} 
    permuAR(arr.slice(), aux.concat([cam])); 
    arr.splice(i, 0, cam); 
} 
return arregpe; 
} 
return permuAR(datoe); 
}
console.log(permu(arreglo));