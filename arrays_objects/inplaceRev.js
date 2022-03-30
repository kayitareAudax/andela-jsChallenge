function reverseArr(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
console.log(reverseArr([12,54,123,90,312]));