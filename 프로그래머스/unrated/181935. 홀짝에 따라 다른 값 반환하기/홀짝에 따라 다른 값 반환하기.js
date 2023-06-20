function solution(n) {
    let result = 0;
    
    for (let i = n % 2 ? 1 : 2; i <= n; i += 2) {
        result += n % 2 ? i : i ** 2;
    }
    
    return result;
}