function checkPalindrome(str){
    let reversed=[];
    let string=str.toLowerCase();
    let size=string.length;
    for(let i=0;i<size/2;i++){
        if(string[i]!=string[size-1-i]){
            return false;
        }
    }
    return true;
}
let str="madam"
if(checkPalindrome(str)){
    console.log("it is a palindrome");
}
else{
    console.log("it is not a palindrome");
}