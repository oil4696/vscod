/**
 * 자바 스크립트 함수
 */
// 일반함수 정의
function 함수명(매개변수1, 매개변수2) {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출");
    return 리턴데이터;  //리턴이 필요할 때 명시하면 됨.
}

const 리턴값 =함수명();
console.log(리턴값);
const 함수명2 = 함수명;
const 리턴값2 = 함수명2(10, 20);
console.log(리턴값2);
const 리턴값3 = 함수명2(10);
console.log(리턴값3);


// 익명함수
const 함수명3 = function (매개변수1, 매개변수2) {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출");
    return 리턴데이터;  //리턴이 필요할 때 명시하면 됨.
}



// 화살표 함수 (function = "=>")
/**
 * 1. 매개변수가 하나명 ()괄호 ㅐㅇ략 가능
 * 2. 실행문이 한줄이면 {}괄호 생략 가능
 * 3. {) 생략시 값만 입력하면 return값이 됨, 즉, {} 생량을 reurn하려면 return키워드 명시해야함
 */
const 함수명4 = (매개변수1, 매개변수2) => {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수호출");
    return 리턴데이터;  //리턴이 필요할 때 명시하면 됨.
}

const fx1 = () => console.log("fx1호출");
const fx2 = () => console.log(n, "출력");
const fx3 = n => n +1;
const fx4 = n => {
    console.log(n, "출력");
    return n + 1;
}
const fx5 = (a, b) => a* b;
fx1();
console.log(fx3(10));

function a() {

}
const sonsoleResult = console.log();
function b() {
    return console.log();
}
console.log("-----------------------------------------------------");

/**
 *  아래의 코드의 실행 순서는 이렇다.
 *  1. 먼저 aaa()가 실해이 되려면 aaa()안에있는 b(aa),b(aa)가 실행이 되어야 한다
 * 그러므로 가장 먼제 출력되는 것은 console.log("bb함수 호출"); console.log("bb함수 호출");이다.
 * 2. 그 다음으로는 aaa(b(aa),b(aa))가 실행준비를 다 했으므로 aaa()가 출력된다.console.log("aaa함수 호출")이 호출되고
 * 3. 그 다음 bb(aa)안에있던 console.log("aa함수 호출"); return "aa함수 리턴값";이 출력이 된다.
 * 
 */

function aa() {
    console.log("aa함수 호출");
    return "aa함수 리턴값";
}

function bb(fxx) {
    console.log("bb함수 호출");
    return fxx;
}   

function aaa(fxx, fxx2) {
    console.log("aaa함수 호출");
    console.log(fxx());
    console.log(fxx2());
    return "aaa함수 리턴값";
}
const result = aaa(bb(aa), bb(aa));

// const aa = () => {
//     console.log("aa함수 호출");
//     return "aa함수 리턴값";
// };

// const bb = (fxx) => {
//     console.log("bb함수 호출");
//     return fxx;
// };

// const aaa = (fxx, fxx2) => {
//     console.log("aaa함수 호출");
//     console.log(fxx());
//     console.log(fxx2());
//     return "aaa함수 리턴값";
// }

// const result = aaa(bb(aa), bb(aa));