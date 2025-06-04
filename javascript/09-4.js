/**
 * async(비동기 함수 정의 키워드), await(비동기 함수 동기 호출 키워드)
 * await 키워드는 asycn 함수 안에서만 사용가능.!!!(단 전역 호출은 가능)
 */

async function fx1(isOK) {
        console.log("fx1호츌");
    if (!isOK) throw new Error("오류 방생!");
        return "정상 리턴"
}

const fx2 = async (isOK) => {
    console.log("fx2호츌");
    if (!isOK) throw new Error("오류 방생!");
        return "정상 리턴"
}

async function main() {
    let r1 = null;

    fx1(false)
    .then(result => r1 = result)
    .then(result => console.log(r1))
    .catch(error => console.error(error));
    
    try {
        let r2 = await fx1(false);
        console.log(r2);
    } catch (error) {
        console.error(error);
    }
}

main();