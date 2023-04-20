function solution(n) {
    let arr = n.toString().split(""); // ["1", "2", "3"]
    let descending_arr = arr.sort((a, b) => b - a).join(""); // "321"
    return Number(descending_arr); // 321
}