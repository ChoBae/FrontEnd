//1
// // 빈 객체 user를 만듭니다.
// let user = {}
// // user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// user['name'] = 'John' 
// // user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// user['surname'] = 'Smith'
// // name의 값을 Pete로 수정해보세요.
// console.log(user)
// user['name'] = 'Pete'
// // user에서 프로퍼티 name을 삭제하세요.
// console.log(user)
// delete user.name
// console.log(user)

//2 객체가 비어있는지 확인하기
// function isEmpty(schedule)  {
//     // 루프가 한번이라도 돌면 비어어있지 않음
//     for (let key in schedule)   {
//         return false;
//     }
//     return true
// }


// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


//3 프로퍼티 합계 구하기
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;

// for (let key in salaries)   {
//     sum += salaries[key];
// }

// console.log(sum);

//4 프로퍼티값 두배로 부풀리기
// 함수 호출 전

function multiplyNumeric(menu)  {
    for (let key in menu)   {
        if (typeof menu[key] == 'number' ){
        menu[key] *= 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu)
  // 함수 호출 후
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };