let studentInputValues = {
    name: "",
    age: "",
    address: "",
}

function handRegisterOnkeyup(e) {
    studentInputValues = {
        ...studentInputValues,
        [e.EventTarget.name]: e.target.value,
    }
}

const handRegisterOnclick = (e) => {
    studentList = [...studentList, studentInputValues];
    studentInputValues = {
        name: "",
        age: "",
        address: "",
    }
    console.log(studentList);
}

function studentRegister() {

    return`
    <div>
        ${studentRegisterInput({type: "text", name: "name", onkeyup: "handleRegisterOnkeyup"})}
        ${studentRegisterInput({type: "text", name: "age", onkeyup: "handleRegisterOnkeyup"})}
        ${studentRegisterInput({type: "text", name: "address", onkeyup: "handleRegisterOnkeyup"})}

        <div>
            <button oncliick="handRegisterOnclick(event)">등록</button>
        </div>
    </div>    
    `;
}