function Queue() { 
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

    function count() {
        return this.dataStore.length;
}

    function Bailarin(nombre,sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
}

        function Bailarines(h, m, nombres) {
            var arreglohm = nombres;
            for (var i=0; i<arreglohm.length; ++i) {
                var b = arreglohm[i]; //Bailarín
            var sex = b[0];
            var nombre = b[1];
            if (sex == "M") {
                     femaleDancers.enqueue(new Bailarin(nombre, sex));
        }
            else {
                    maleDancers.enqueue(new Bailarin(nombre, sex));
        }
    }
}

        function Bailar(h, m) {
            console.log("las parejas de baile son ");
            while (!m.empty() && !h.empty()) {
            M = m.dequeue();
            H = h.dequeue();
            console.log("La bailarina es " + M.nombre+" , el bailarin es " + H.nombre);
    }
    console.log();
}

    var B = [['M','Maria'],['H','PEPE'],['H','Adolf'],['M','Peñu'],['H','Alan'],['M','Diana'],['M','Hani'], ['H','Nestroka'],['H','Vacated']];
  
    var maleDancers = new Queue();
    var femaleDancers = new Queue();
    Bailarines(maleDancers, femaleDancers, B);
    Bailar(maleDancers, femaleDancers);
        if (maleDancers.count() > 0) {
        console.log(" Hay " + maleDancers.count() +  " hombre esperando para ir a bailar");
}
        if (femaleDancers.count() > 0) {
        console.log(" Hay " + femaleDancers.count()  +  " mujeres esperando para ir a  bailar");
}