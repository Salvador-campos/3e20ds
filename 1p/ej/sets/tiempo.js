const na = new Set([]);
console.time();
for(i=4;i<7;i++){
    na.add("10e"+i+ "   "+ Math.pow(10,i));
}
console.log(na);
console.timeEnd();