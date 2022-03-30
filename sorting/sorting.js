function isPrime(num){
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
function sort(numbers){
    //remove primes
    const nonPrime=numbers.filter(function(num){return !isPrime(num)});
    for(let i=0;i<nonPrime.length;i++){
        let max_index=i;
        for(let j=i+1;j<nonPrime.length;j++){
            if(nonPrime[j]>nonPrime[max_index]){
                max_index=j;
            }
        }
        if(nonPrime[max_index]!=nonPrime[i]){
            let temp=nonPrime[i];
            nonPrime[i]=nonPrime[max_index];
            nonPrime[max_index]=temp;
        }
    }
    return nonPrime;
}
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9,"qd", 0]));

