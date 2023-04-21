function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let composite_num = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) composite_num++;
        }
        if (composite_num >= 3) count++;
    }
    return count;
}