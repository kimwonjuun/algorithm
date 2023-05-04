// function solution(arr, k) {
//     return k % 2 === 1 ? arr.map(v => v * k) : arr.map(v => v + k);
// }

// 축약
function solution(arr, k) {
    return arr.map(v => k % 2 ? v * k : v + k);
}
