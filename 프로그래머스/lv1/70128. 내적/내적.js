function solution(a, b) {
    // const result = [];
    // for (let i = 0; i < a.length; i++) {
    // result.push(a[i] * b[i]);
    // }
    // return result.reduce((acc, cur) => acc + cur, 0);
    
    return a.map((a, i) => a * b[i]).reduce((acc, cur) => acc + cur, 0);
    
    // 가장 빠름
    // return a.reduce((acc, cur, idx) => acc += cur * b[idx], 0);
}