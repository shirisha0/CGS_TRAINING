jar=[10,20,30]
c=0
    for(let i=0;i<3;i++){
        x=Math.floor(jar[i]/3)
        c=c+x
        r=jar[i]%3;
        if (r>0){
           c=c+1
        }
    }
    
console.log(c)