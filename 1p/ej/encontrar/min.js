var j,i,min;
var s=[3,1,4,2,3];
for(i=0;i<s.length;i++){
    for(j=i+1;j<s.length;j++){
        if(s[j]>s[i]){
            s[j]=s[i];
            min=s[j];
            
            
        }

    }
}
console.log(min);