var matriz = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
    class sacarfila {
            fil(p,m){
            var c=[];
                for(let i=0;i<m.length;i++){
                    c[i]=m[p-1][i];
                                           }
                        return c;
                }
 } 
var fila = new sacarfila();
 console.table(matriz);
console.log("la fila de la matriz de posicion  2 es \n"+fila.fil(2,matriz));