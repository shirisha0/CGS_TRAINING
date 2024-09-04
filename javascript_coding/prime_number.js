num=20;
c=0
for(i=2;i<20;i++){
    if (num%i==0){
        c=c+1;
    

    }
}
if (c>1){
    console.log("not a prime number");
}
else{
    console.log("prime number");
}