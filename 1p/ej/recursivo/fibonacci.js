function fibore(n){
    var va = 1;
    var vp = 0;

    if (n ==1){
        return 1;
    }
    let s = n -1;

    while(s){
        va += vp;
        vp = va - vp;

        s-=1;
    }

    return va;
}

console.log(fibore(17));