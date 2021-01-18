var matriz = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
    class sacarcolumna {
            colum(p,m){
            var c=[];
                for(let i=0;i<m.length;i++){
                    c[i]=m[i][p-1];
                                           }
                        return c;
                }
 } 
var column = new sacarcolumna();
 console.table(matriz);
console.log("la columna de la matriz de posicion  2 es \n"+column.colum(2,matriz));