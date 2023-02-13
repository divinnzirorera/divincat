var add = function add(numbers){
          var sum =0
          var number = numbers
          var i ;
          for ( i =0;i<numbers.length;i++){
            sum += number[i]
          }
          return sum;
          }
   
module.exports = add