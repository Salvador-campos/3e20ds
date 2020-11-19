var i,j,s=0;
for(i=2;i<30;i++){
   for(j=1;j<i;j++){
    if( i % j==0 && j!=1 && j!=i){
     s=1;
    }
    
   }
     if(s==0){
         console.log(i);
     }  
     else{
         s=0;
     }
   }
