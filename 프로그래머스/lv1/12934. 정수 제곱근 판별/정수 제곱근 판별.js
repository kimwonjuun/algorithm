function solution(n) {
    // Math.sqrt(n) : n의 제곱근 반환
    // Math.pow(n) : n의 제곱 반환
    return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}