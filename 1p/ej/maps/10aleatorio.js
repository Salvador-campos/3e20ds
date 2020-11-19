const na= new Map();
var a=0;
for(i=0;na.size<10;i++){
    a=Math.floor(Math.random()*10)+1;
    na.set(i,"nombre"+a);
}
console.log(na);