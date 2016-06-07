$(document).ready(function(event) {
  $("#numberBlanks").submit(function(event) {
    var numberToFactorial = parseInt($("input#number1").val());
    var factorialArray = [];
    var total = 1;
    for (var index = numberToFactorial; index > 0; index--) {
      factorialArray.push(index);
    }
    // alert(factorialArray)
    for (var index2 = 0; index2 < factorialArray.length; index2++) {
      var factorialMuliply = factorialArray[index2];
      // alert(factorialMuliply);
      total = total * factorialMuliply;

    }
    $("#number1Output").text(total);
    event.preventDefault();
  });
});
