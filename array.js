var array = ["534", "856", "832", "903", "233"];  
var maior_numero = array.map(Number).reduce(function(numero1, numero2) {  
  return Math.max(numero1, numero2);  
});  
        
console.log(maior_numero ); 

var array = ["78", "678", "15", "435", "673"];  
var menor_numero = array.map(Number).reduce(function(numero1, numero2) {  
  return Math.min(numero1, numero2);  
});  
        
console.log(menor_numero ); 