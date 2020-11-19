var l= new Array();
var b=2,c,r=1,i=0;
    do{
   l[i]=r; 
   console.log(l[i]);
    c=r;
    r=r+b;
    b=c;   
    i++; 

}while(i<10);