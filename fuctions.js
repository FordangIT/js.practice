// function은 계속 반복해서 사용할 수 있는 코드 조각이다. 
console.log("hello my name is 유정");
console.log("hello my name is 망뚜");
console.log("hello my name is 지현");
console.log("hello my name is 썬민");
console.log("hello my name is 유임");
console.log("hello my name is 씅희");
// 이름 제외 중복이 반복되니, 좋은 코드가 아니다. 
//function은 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해준다. 

function sayHello(nameOfPerson, age){
    console.log("Hello mmy name is" + nameOfPerson + " and I'm " + age)
}
sayHello("유댕", 24);
sayHello("망두", 24);
sayHello("지현", 23);
// Hello my name is 유댕 and I'm 24
// Hello my name is 망뚜 and I'm 24
// Hello my name is 지현 and I'm 23


function                                                            
