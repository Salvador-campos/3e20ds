var s,r,comb;
//comb=n!/(n-r)!r!;
var m=0,j=0,i=0,s=0,n=3,r=2;
for(i=1;i<15;i++){
    s=i;
   for(j=i-1;j>0;j--){
    
   s=s*j;
   }
   m=i;
   if(i==5){
       f5=s;
   }
  if(i==3){
   comb=s/(n-r)*r;
   console.log("ocurrieron " + comb + " saludos") 
   //console.log(m+"!="+ s +" palabras de 8 simbolos");
  }
}