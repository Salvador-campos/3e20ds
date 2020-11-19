const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("ingrese el el valor para x", (x) => {
    rl.question("ingrese el largo de la serie", (c)=> {
        var r=0;
        for(i=1;i<c;i++){
           
           if(i==1){
            r=x;
           console.log(x);
          }
    
            if(i%2!=0 && i!=1){
                r=(Math.pow(x,i))/(i);
                console.log(r);
               
               }
              if(i%2==0){ 
                r=(Math.pow(x,i))/(i);
                r=r*(-1);
                console.log(r);
                r=r*(-1);
               }    
        
        }

     rl.close();
    });
 });    