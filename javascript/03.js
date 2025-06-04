const student = {
    name: "김준일",
    age:32,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
const a = 'name';
const b = 'age';
// 변수호출 []사용
console.log(student[a]);
console.log(student[b]);
console.log(student[1]);
student[a] = '김준이';
console.log(student);
student.name = '김준삼';
console.log(student);

student.printName = () => console.log("이름:", student.name);
student.printName();
const loginButton = {
    text: "로그인",
    value: "test",
    onclick: () => {
        console.log(loginButton.text)
    },
}

loginButton.onclick();
loginButton.onclick = () => {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onclick();

console.log(typeof(loginButton));

console.log(Object.keys(loginButton));
// loginButtonKeys = ["text", "value","onclick"]
const loginButtonKeys = Object.keys(loginButton);
for (let i = 0; i < loginButtonKeys.length; i++) {
    console.log(loginButton[loginButtonKeys[i]]);
    const keyName = loginButtonKeys[i];
}

// const loginButtonvalues = Ovject.values(loginButton);
// for (let  i= 0; i < loginButtonValueslues.length; i++) {
//     console.log(loginButtonValues[i]);
// }
// entries key,values를 배열로 묶는 열할 그래서 출력값이 배열안의 배열로 묶인다. 
const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
for (let i = 0; i < loginButtonKeys.length; i++) {
    const entri = loginButtonEntries[i];
    const key = entryu[0];
    const value = entry[1];
    console.log(entry, key, value);
}

for (let entry of loginButtonEntries) {
    const key = entryu[0];
    const value = entry[1];
    console.log(entry, key, value);
}
