a=[1,2,3,4,5,6,7,8,9];
c=a[0];
for(i of a){
    if(i>c){
        c=i;
    }
}
console.log(c);
