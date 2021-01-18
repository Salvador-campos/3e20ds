var matri = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
        class matriz{
          sacarColumna(p,m){
              let c=[];
             for(let i=0; i<m.length; i++){
                  c[i]=m[i][p-1];
        }
             return c;
    }

            transponer(matri){
              let matri2=[];
             for(let i=0; i<matri.length; i++){
                    matri2[i]=this.sacarColumna(i+1, matri);
        }
                 return matri2;
    }
}
  console.table(matri);
  console.log('mostrando la matriz transpuesta');
  let matri2= new matriz();
  console.table(matri2.transponer(matri));