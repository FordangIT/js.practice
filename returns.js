const calculator = {
    plus: function (a, b){
    return a + b;
    },
    minus: function (a, b){
        return a - b;
    },
    times:  function(a, b){
        return a * b; 
    }, 
    divide: function(a, b){
        return a / b; 
    },
}; 
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10); 
const timesResult =  calculator.times(10, minusResult); 
const divideResult = calculator.divide(timesResult plusResult); 

// console.log: 콘솔에 결과를 보여주기 위한 것 
// 브라우저에서 결과를 보여주는 alert처럼,,
// javascript 코드에서는 value값을 바로 얻을 수가 없음 
