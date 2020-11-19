const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("ingrese el largo de la serie", (c)=> {
        var r=0,s=1;
        for(i=1;i<c;i++){
           
           if(i==1){
            r=s;
           console.log(r);
          }
    
            if(i%2!=0 && i!=1){
                r=(s)/i;
                console.log(r);
               
               }
              if(i%2==0){ 
                r=(s)/i;
                r=r*(-1);
                console.log(r);
                r=r*(-1);
               }    
        
        }

     rl.close();
    });
 