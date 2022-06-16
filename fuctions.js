// function은 계속 반복해서 사용할 수 있는 코드 조각이다. 
console.log("hello my name is 유정");
console.log("hello my name is 망뚜");
console.log("hello my name is 지현");
console.log("hello my name is 썬민");
console.log("hello my name is 유임");
console.log("hello my name is 씅희");
// 이름 제외 중복이 반복되니, 좋은 코드가 아니다. 
//function은 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해준다. 

function sayHello(nameOfPerson) {
    console.log(nameOfPerson);
}
sayHello("유댕");
sayHello("망뚜");
sayHello("지현");
// 유댕 망뚜 지현 


function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + " and I'm " + age)
}
sayHello("유댕", 24);
sayHello("망두", 24);
sayHello("지현", 23);
// Hello my name is 유댕 and I'm 24
// Hello my name is 망뚜 and I'm 24
// Hello my name is 지현 and I'm 23

function plus(a, b){
    console.log(a +b);
}
function divide(a,b){
    console.log(a/b);
}
plus(60, 80);
divide(98, 20);

//

const player ={
    name = "nico";,
    sayHello: function (otherPersonName) {
        console.log("Helo!" + otherPersonName + "nice to meet you!");
    },
}; 
console.log(player.name); 
player.sayHello("lynn"); 
player.sayHello("망뚜"); 
player.sayHello("유댕"); 
//나만의 console.log()
//나만의 array.push()를 만든것임
// 정리: function에게 정보를 보내는 법을 배웠음 

const calculator = {
    add: function(a, b){
    console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a/b);
    },
    multi: function(a, b){
        console.log(a*b);
    }, 
}
calculator.add(2, 3);
calculator.minus(3, 2);
calculator.divide(5, 3); 
calculator.multi(6, 4); 