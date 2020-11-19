const a = new Set([]);
const s= new WeakSet([]);
a.add("vacated diamond");
a.add(3);
a.add("takos");
console.log(a);
s.add("vacated diamond");
s.add(3);
s.add("takos");
//console.log(s);
// set puede almacenar de todo tipo y weaksets solo almacena objetos al pasarle valores que no 
//son objetos da error en el programa