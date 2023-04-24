function solution(rsp) {
    let win_num = rsp.split("").map(v => v === "2" ? 0 : v === "0" ? 5 : 2);
    return win_num.join("");
}