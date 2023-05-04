// function solution(n) {
//     return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat(n).slice(0, n);
// }

// 그냥 이렇게 써도 된다 ...
function solution(n) {
    return "수박".repeat(n).slice(0, n);
}
