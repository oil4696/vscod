function requsetBackend(isOK) {
    if (isOK) {
    return {status: 200, body: "정상적인데이터응답!"};
    }
    return {status: 400, body: "오류데이터응답!"};
}

const p1 = new Promise ((resolve, reject) => {
    console.log("p1 프로미스 생성")
    const { status, body } = requsetBackend(true);
    if (status === 200) {
        resolve(body);
    } else if (status === 400) {
        reject(new Error(body));
    }
})

p1.then(responseBody => {
    console.log("p1:", responseBody);
    return "p1 리턴값!!"
}).then(result => {
    console.log("p1-2:", result)
        return "p-2 리턴값!!"
}).then(result => {
    console.log("p1-3:", result)
}).catch(error => {
    console.log("p1:", error)
})

const p2 = new Promise ((resolve, reject) => {
    console.log("p2 프로미스 생성")
    const { status, body } = requsetBackend(false);
    if (status === 200) {
        resolve(body);
    } else if (status === 400) {
        reject(new Error(body));
    }
})

p2.then(responseBody => {
    console.log("p2:", responseBody);
}).catch(error => {
    console.log("p2:", error)
})

const p3 = new Promise ((resolve, reject) => {
    console.log("p3 프로미스 생성")
    const { status, body } = requsetBackend(true);
    if (status === 200) {
        resolve(body);
    } else if (status === 400) {
        reject(new Error(body));
    }
})

p3.then(responseBody => {
    console.log("p3:", responseBody);
}).catch(error => {
    console.log("p3:", error)
})
// 입력된 순서대로 출력이 된다. 
/**
 * 1, 4, 7, 8
 * c, t, t, c
 * 2, 5
 * t, c
 * 3, 6
 * t, c
 */
