function solution(n, k) {
    const arr = [];
    
    for (let i = k; i <= n; i++) {
        if (i % k === 0) {
            arr.push(i);
        }
    }
    
    return arr;
}