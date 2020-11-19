let salvador = { name: "yo" };
let campos = { name: "apellido" };

const map = new Map();
const weakMap = new WeakMap();

map.set(salvador, 7);
weakMap.set(campos, 6);

salvador = null;
campos = null;
console.log(map,weakMap);
//maps si guarda el valor anterior mientras weak maps lo elimina y no guarda.