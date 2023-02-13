function multiply(numbers){
    product = 1;
    for ( var i=0;i<=numbers.length;i++){
        product *= numbers[i]; 
    }
    return product;
}
var multiply = multiply()
module.exports = multiply