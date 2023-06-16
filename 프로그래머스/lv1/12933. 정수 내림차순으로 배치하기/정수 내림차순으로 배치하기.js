function solution(n) {
    const arr = n.toString().split(""); // ["1", "2", "3"]
    const descending_arr = arr.sort((a, b) => b - a).join(""); // "321"
    return Number(descending_arr); // 321
}