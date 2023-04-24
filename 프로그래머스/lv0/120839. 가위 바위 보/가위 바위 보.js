function solution(rsp) {
    let win_num = rsp.split("").map(v => v === "2" ? 0 : v === "0" ? 5 : 2);
    return win_num.join("");
}

// 다른 사람의 풀이
// function solution(rsp) {
//     let arr = {
//         2: 0,
//         0: 5,
//         5: 2
//     };
//     let answer = [...rsp].map(v => arr[v]).join("");
//     return answer;
// }