var hanoi = function(disc,src,aux,dest){
    if(disc > 0){
      hanoi(disc -1,src,dest,aux);
      console.log('Mover disco '+disc+' de '+src+' a '+dest);
      hanoi(disc -1,aux,src,dest);
    }
  };
hanoi(3,'buscar','temp','destino');