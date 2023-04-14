function solution(n) {
    let arr = n.toString().split("").map(Number);
    return arr.reduce((a, b) => a + b);
}