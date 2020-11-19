const na= new Set();
var a;
for(i=0;na.size<10;i++){
    a=Math.floor(Math.random()*10)+1;
    na.add("name"+a);
}
console.log(na);