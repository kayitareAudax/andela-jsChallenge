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
    let sorted=[];
    for(let i=0;i<numbers.length;i++){
        let max_index=i;
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[j]>numbers[max_index]){
                max_index=j;
            }
        }
        if(numbers[max_index]!=numbers[i]){
            let temp=numbers[i];
            numbers[i]=numbers[max_index];
            numbers[max_index]=temp;
        }
    }
    for(let i=0;i<numbers.length;i++){
        if(!isPrime(numbers[i])){
            sorted.push(numbers[i]);
        }
    }
    return sorted;
}
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9]));