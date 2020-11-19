var i,j,s=0,pp=0;
for(i=2;i<30;i++){
   for(j=1;j<i;j++){
    if( i % j==0 && j!=1 && j!=i){
     s=1;
    }
    
   }
     if(s==0){
        // console.log(i);
         pp=pp+1;
     }  
     else{
         s=0;
     }
     if(pp==5&&s==0){
         console.log(i);
         break;
     }
   }
