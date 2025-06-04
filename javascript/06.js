/**
 * 단축 평가 논리 연산
 */
const name = '김준일';

console.log(!!name && !!'김준이');
// &&연산 -> 앞의 값이 true일 떄 뒤의 값을 리턴, false일 때 false리턴
console.log(true && name);
console.log(true && true);
console.log(true && false);
console.log(true && 10);
// &&의 앞의 조건이 true이면 뒤의 값을 리턴한다.
// &&의 앞의 조건이 false면 리턴은 false
console.log( false || 10);
// ||일때 앞의 조건이 false면 뒤의 값을 리턴한다.
// || 연산 -> 앞의 값이 false일 때 뒤의 값을 리턴, ture일 때 true리턴
console.log(null ?? 10);
console.log(undefined ?? 100);
console.log(20 ?? 100);
//unllush 병합 연산
// ?? 연산 -> 앞의 갑이 null 또는 undefind  가 아니면 앞의 값, 그 외에는 뒤의 값