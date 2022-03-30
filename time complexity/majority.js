const isMajority=(arr)=>{
    let counter=0;
    let maxCounter=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                counter++;
            }
        }
        if(counter>maxCounter){
            maxCounter=counter;
        }
    }
    if(maxCounter>arr.length/2){
        return true;
    }
    return false;
}
let arr=[3,1,3,4,4]
if(isMajority(arr)){
    console.log("it is  majority");
}
else{
    console.log("it is not  majority");
}
