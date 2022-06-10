const playerName = "nico"; 
const playerPoints = 121212; 
const playerHandsome = false; 
const playerFat = "little bit"; 

const player = ["nico", 1212, false, "little nico"]; 
// 이 array 는 좋지 않아. 왜냐하면 nico나 1212가 무엇을 뜻하는지 몰라 
// player[0] == name  

//object를 만들어보자. 
const player = {
    name: "nico",
    points:  1212,
    fat: true,
}
console.log(player);  
//이 배열이 list는 아니다. 모두 같은 의미를 갖는게 list 
// 예를들어, 요일 배열같이 
console.log(player.name); 
= console.log(player["name"])
//console은 object 라는 뜻이고, 그 안의 어딘가에 log라는 것이 있다는 것 

player.fat = false; 
//이렇게 업데이트를 할 수도 있다. 
//object인 player은 여전히 바꿀 수 없다. 
// const안의 무언가를 업데이트 할 때는 문제없음 

player.lastName = "patato"; 
// 이렇게 없는 property를 추가할 수도 있다. 

// 한 주의 요일에 대한 리스트를 가지려면, object로 만드는 건 의미없음 
