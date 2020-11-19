var sen= new Array();
var x=3,fac=0,s=3,r=0,ss=3;
for(i=1;i<21;i++){
    fac=i;
   for(j=i-1;j>0;j--){
    
    fac=fac*j;
   }
 
 
   if(ss==3){
    r=ss;
    ss=0;
   sen[0]=r;
    console.log(sen[0]);
  }
  
  
  if(i==5||i==9||i==13||i==17){
    r=(Math.pow(x,s))/(fac);
    sen[i]=r;
    console.log(sen[i]);
    s=s+2;
  }
    if(i==3||i==7||i==11||i==15||i==19){
        r=(Math.pow(x,s))/(fac);
        r=r*(-1);
        sen[i]=r;
        console.log(sen[i]);
        r=r*(-1);
        s=s+2;
       }    

}