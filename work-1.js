// function formatHTML () {
// let htmlData = { // * 지역변수 만들기
// title: "백지원",
// h1: "내이름은",
// p:"백지원입니다.",

// }


// function formatHTML (language) {
//   let htmlData = { // * 지역변수 만들기
//   titleOne: "백지원",
//   titleTwo: "Alice",
//   h1: "내이름은",
//   p:"백지원입니다.",
  
  // }
  
  function formatHTML (language = "korean") {
    let htmlData = { // * 지역변수 만들기
    titleOne: "백지원",
    titleTwo: "Alice",
    h1: "내이름은",
    p:"백지원입니다.",
    
    }


let decision = () => {
  if(language==="korean") {
  return htmlData.titleOne;
  } 
  
  if(language==="english"){
    return htmlData.titleTwo;
  }else {
    
  }
}

// * 결과는 아래에...

// <html>
//   <head>
//     <title>백지원</title>
//   </head>
//   <body>
//     <h1>내이름은</h1>
//     <p>백지원입니다.</p>
//   </body>
// </html>



// <html>
//   <head>
//     <title>Alice</title>
//   </head>
//   <body>
//     <h1>내이름은</h1>
//     <p>백지원입니다.</p>
//   </body>
// </html>
// * 이게 리액트 한거래....





//  $ 표시 기능이 머여>???

// * 위에있는 title 값을 밑에 title 테그에 넣을 수 있을까?
// let html = `
// <html>
//   <head>
//     <title>${htmlData.title}</title>
//   </head>
//   <body>
//     <h1>${htmlData.h1}</h1>
//     <p>${htmlData.p}</p>
//   </body>
// </html>

// `;



let html = `
<html>
  <head>
    <title>${decision()}</title>
  </head>
  <body>
    <h1>${htmlData.h1}</h1>
    <p>${htmlData.p}</p>
  </body>
</html>

`;

return html;
}

// console.log(formatHTML());
console.log(formatHTML("korean"));
console.log(formatHTML("english"));
// * html 에서 정적으로 작성한 것처럼 나오지만, 외부에서 정보를 가져온것이다 
// * 장점 : 내부를 파악 할 필요가 없다.
// * 서버 만들 때, html 요소 얘만 보내면 된다
// * 함수 안에 가두는 듯한 느낌의 기조


