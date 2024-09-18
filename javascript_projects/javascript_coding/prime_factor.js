n=12;
number=[1,2,5]
s=0;
let factors = [];
    let divisor = 2;
    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
           
            divisor++;
        }
    }
for(let i=0;i<factors.length;i++){
    if (factors[i]<factors.length){
       s=s+number[factors[i]]
    }
    
    else{
        s=s+0
    }
}
console.log(s)