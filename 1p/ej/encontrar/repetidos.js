var j,i;
var s=[3,1,4,2,3];
for(i=0;i<s.length;i++){
    for(j=i+1;j<s.length;j++){
        if(s[j]==s[i]){
            console.log(s[j]);
            
        }
    }
}