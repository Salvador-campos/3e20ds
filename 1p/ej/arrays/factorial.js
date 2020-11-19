var f=new Array();
var m=0,j=0,i=0,s=0;
for(i=1;i<11;i++){
    s=i;
   for(j=i-1;j>0;j--){
    
   s=s*j;
   }
   m=i;
   f[i]=s;
   console.log(m+"!="+f[i]);  
}
       