// function a () {
//   return {
//     name : "",
//     age : 0,
//     job : "",
//   }
// }

const a = () => {
  return {
    name : "",
    age : 0,
    job : "",
  }
}

// console.log(a());
// * 함수가 호출되기 전까지는 무엇인지 모를것이다.

const b =a();
// * 콘솔을 찍지 않는 이상 b 가 뭔지 전혀 모름
console.log(b);