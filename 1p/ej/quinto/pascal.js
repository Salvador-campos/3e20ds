    var fac= new Array();
var m=0,j=0,i=0,s=0,n=5,p=0,f4=0,f3=0,f2=0,f1=0;
for(i=1;i<11;i++){
    s=i;
   for(j=i-1;j>0;j--){
    
   s=s*j;
   }
   m=i;
   if(i==1){
    f1=s; 
    fac[3]=f1;  
   }
   if(i==2){
    f2=s; 
    fac[2]=f2;  
   }
   if(i==3){
    f3=s; 
    fac[1]=f3;  
   }
   if(i==4){
    f4=s; 
    fac[0]=f4;  
   }
   
   //(n-1)!/i!*(n-1-i)! 
}
for(i=0;i<n;i++){
    s=i;
    p=(f4)/(s)*(fac[i]);
    console.log(p);
   }
    