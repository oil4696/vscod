let studentList = [];


function app() {
    const appINfo = {
        tutle: "Component Study",
        date: new Date().toLocaleDateString(),
        author: 'sun',
    }
    return `
    <div>
        <h1>제목: ${appINfo.title}</h1>
        <h2>작성일: ${appINfo.date}</h2>
        <h2>작성자: ${appINfo.author}</h2>
        ${studentRegister()}
    </div>
        `;
}