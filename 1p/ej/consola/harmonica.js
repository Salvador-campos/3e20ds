const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("ingrese el largo de la serie", (c)=> {
        var r=0,s=1;
        for(i=1;i<c;i++){
                r=(s)/i;
                console.log(r);
                 
        }

     rl.close();
    });