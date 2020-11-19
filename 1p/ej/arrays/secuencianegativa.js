var se=new Array();
var s=-1;
for(i=0;i<10;i++){
    s=s+2;
    if(s==1||s==5||s==9||s==13||s==17){
        s=s*(-1);
        se[i]=s;
        
        s=s*(-1);
    }
    else
      se[i]=s;
    console.log(se[i]);
}