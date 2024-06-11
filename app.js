// function a () {
//   return {
//     name : "",
//     age : 0,
//     job : "",
//   }
// }

const a = (a, b, c) => {
  return {
    name : a, // * a,b,c -> 변수명
    age : b,
    job : c,
  }
}

// console.log(a());
// * 함수가 호출되기 전까지는 무엇인지 모를것이다.

const b =a("백지원", 31, "학생"); // * 객체를 만들어주는 캡슐을 만들어준다
// * 콘솔을 찍지 않는 이상 b 가 뭔지 전혀 모름
console.log("첫번째 b: ", b);
b.address = "대전"; // * 요것이 동적 ( 즉석 추가) 
console.log("두번째 b: ",b);
// * 정적으로 작성 할 수도, 동적으로 작성할 수도 있는 유연함, ex. 비타민c를 가루로, 알약으로 등등 비타민 c자체는 정적, 복용 방법은 동적으로
// * a 함수 name, age, job은 고정, b펑션에서 