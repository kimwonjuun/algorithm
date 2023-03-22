function solution(my_string, n) {
    // Spread Operator 이용 문자열을 배열로 변환
    // repeat(), join()
    return [...my_string].map(v => v.repeat(n)).join('');
}