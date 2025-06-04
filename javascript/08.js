const student = {
    name:'김준일',
    age: 32,
    address: '부산 동래구',
    phone: '010-9988-1916',
};

//비구조 할당
const {name, address} = student;
console.log(name,address);

//REST 문법
// 가지고올 변수를 제외한 나머지를 가져온다 사용법 (변수명1,변수명2, ...나머지변수명)
const { age, phone, ...a } = student;
console.log(age, phone, a);

const numbers =[1,2,3,4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// spread
// 사용법 (... + 가지고올 객체명
const newStudent = {
    ...student,
    gender: '남',
}
console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers)


const newNumbers2 = numbers;

let names = [];

function addName(name) {
    // names.push(name);
    names = [...names, name];
}

let obj = {
    data1: "data1",
    data2: "data2",
}

function addprops(props) {
    obj = {
        ...obj,
        ...props,
    }
}
addprops({data3: "data3",data4: "data4"});
console.log(obj);