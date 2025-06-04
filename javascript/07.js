/**
 * 비구조할당(구조분해)
 */
const student = {
    name: "김준일",
    age: 32,
    address: "부산 동래구",
};

const studentName = student.name;
const studentAge = student.age;
const {name: studentName2, age: studentAge2} = student;
// 키값을 명시하면 변수명을 변경가능
console.log(studentName);
console.log(studentAge);
console.log(studentName2);
console.log(studentAge2);

function printStudentInfo({name, address: addr, age}) {
    console.log(name);
    console.log(addr);
    console.log(age);
}
printStudentInfo(student);

/**
 * 객체 구조분해할 때 주의할 점
 * 객체의 속성명이 같으면 이름을 바꿔줘야함
 */
const s1 = {
    name: "김준일",
    age: '32',
}

const s2 = {
    name1: "김준이",
    age1: '33',
}

const {name: n1, age: a1} = s1;
const {name: n2, age: a2} = s2;

// 배열 비구조할당
const numbers = [1,2,3,4,5];
const [num2, num1, num3, num4, num5, num6] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "데이터 set");
        },
    }
    return [ dataState.data, dataState.setData ];
}

const [ userData, setUserData ] = useState({username: "test", password: "1234"});
console.log(userData);
setUserData({username: "test2", password: "5678"});