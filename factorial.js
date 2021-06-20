//5! = 1*2*3*4*5 (factorial)
//10! = 1*2*3*4*5*6*7*8*9*10 (factorial)
 let factorial = 1;
for( let i=1; i <=5; i++){
    factorial= factorial*i; // factorial er sate i er man 1+1 kore bere ja hobe ager tar sate seta gun hobe
}
console.log(factorial)


let factorial = 1;
for( let i=1; i <=20; i++){
    factorial= factorial*i;
}
console.log(factorial)
// //
 let factorial = 1;
for( let i=1; i <=5; i++){
    factorial= factorial*i;
    console.log(i, " ",factorial); //factorial vege vege dekabe
}
///
function getfactorial(number){
    let factorial = 1;
for( let i=1; i <=number; i++){
    factorial= factorial*i;
}
return factorial;
}
console.log(getfactorial(20))