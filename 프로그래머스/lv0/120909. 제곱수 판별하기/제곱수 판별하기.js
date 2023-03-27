function solution(n) {
    // 숫자의 제곱근을 반환하는 Math.sqrt() 함수 사용
    // 나머지 연산자로 n이 소숫점을 가졌는지 판별함 가졌다면 n은 제곱수가 아님
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}