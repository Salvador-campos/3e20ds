function frecu(numero){
    return numero > 1 ? numero * frecu(numero -1) : 1;
  }
  
  console.log(frecu(7));