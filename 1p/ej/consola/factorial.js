const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("ingrese hasta que numero se sacara factorial", (c)=> {
        var m=0,j=0,i=0,s=0;
        for(i=1;i<=c;i++){
            s=i;
           for(j=i-1;j>0;j--){
            
           s=s*j;
           }
           m=i;
           console.log(m+"!="+s);  
        }


     rl.close();
    });