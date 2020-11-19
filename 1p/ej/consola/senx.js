const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("ingrese el numero para x", (x) => {
    rl.question("ingrese la cantidad de veces que se elevara el numero", (c)=> {
        var fac=0,s=3,r=0,ss=0,n=0;
        ss=c*2;
        for(i=1;i<=ss;i++){
            fac=i;
           for(j=i-1;j>0;j--){
            
            fac=fac*j;
           }
         
         
           if(i==1){
            r=x;
            n=1;
           console.log(r);
          }
    
            if(i%2!=0 && i!=1 && s==i&&n==0){
                r=(Math.pow(x,s))/(fac);
                console.log(r);
                n=1;
                s=s+2;
               }s
              if(i%2!=0 && i!=1 && s==i&&n==1){ 
                r=-1*(Math.pow(x,s))/(fac);
                console.log(r);
                r=r*(-1);
                s=s+2;
                n=0;
               }      
        
        }
     rl.close();
    });
 });