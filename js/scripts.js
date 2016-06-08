var factorial = function(number) {
  if (number === 1) {
    return 1;
  }
    var total = number * factorial(number-1);
    return total;
};

// function factorial( n ) {
//   if ( n === 1 ) {
//     return 1;
//   }
//   return n * factorial( n - 1 );
// };

$(document).ready(function(event) {
  $("#numberBlanks").submit(function(event) {
    var numberToFactorial = parseInt($("input#number1").val());

    $("#number1Output").text(factorial(numberToFactorial));
    event.preventDefault();
  });
});
