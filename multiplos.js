var numberList = 1000;
var x = 5;
var z = 7;
var sum = 0;
var arraylist = [];


function solution(numberList){
    for( var i = 1 ; i < numberList ; i++){
        if( i % x === 0 || i % z === 0 ){
            arraylist.push(i);
        }
    }
    for ( var i=0 ; i < arraylist.length; i++) {
        sum += arraylist[i]
    }
    return arraylist;
    
}

console.log('Números mútiplos de ' + x +' e ' + z + ', abaixo de ' + numberList);
console.log(solution(numberList));
console.log('A soma desses múltiplos é ' + sum);

