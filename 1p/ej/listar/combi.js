var combi=[],arreglo=[31,1,4,2,32];
function fcombi(prefix, S) {
for(var i=0;i<S.length;i++){
    combi.push(prefix+S[i]);
    fcombi(prefix+S[i],S.slice(i+1));
          }
       }
fcombi(" ",arreglo);
console.log(combi);