function isPrime(num){
    for(let i=2;i<num/2;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
function primes(arr){
    let primeNums=[];
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            primeNums.push(arr[i]);
        }
    }
    return primeNums;
}
console.log(primes([2,4,5,9,11,15,23]));