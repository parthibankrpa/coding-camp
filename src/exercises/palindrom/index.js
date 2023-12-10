function palindrome(str) {
    return str === reverse(str);
}
function reverse(str){
    return str.split('').reverse().join('');
}
