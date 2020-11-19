var f=new Array();
var b=1,c=1,r,i=0;
    do{
    r=b+c;  
   f[i]=r;
   console.log(f[i]);
    c=b;
    b=r;   
    i++; 

}while(i<10);