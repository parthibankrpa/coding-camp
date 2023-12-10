// function reverse(str){

//     let reversed = '';

//     for(let character of str){
//         reversed = character+reversed;
//     }

//     return reversed;
//     // return str.split('').reverse().join('');
// }

// function reverse(str){

//     return str.split('').reverse().join('');
// }
function reverse(str){

    return str.split('').reduce((reversed,character)=>character+reversed);

}


module.exports = reverse;