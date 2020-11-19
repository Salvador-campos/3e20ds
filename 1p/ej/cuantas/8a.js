var m=0,j=0,i=0,s=0;
for(i=1;i<11;i++){
    s=i;
   for(j=i-1;j>0;j--){
    
   s=s*j;
   }
   m=i;
  if(i==8){
   console.log(m+"!="+ s +" palabras de 8 simbolos");
  }  
}
       
