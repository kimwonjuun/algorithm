function solution(n) {
    // String() 숫자열을 문자열로 변환 -> '12345'
    // split() 문자열을 잘라 배열로 변환 -> ['1', '2', '3', '4', '5']
    // map() 으로 뿌려 parseInt() 를 통해 각 문자열을 숫자로 변환 (이게 맞나 싶음?) -> [1, 2, 3, 4, 5]
    // reduce() 로 배열 내 요소 총합을 구함 -> 15
    // 이렇게 길게 풀 일인지 ?
    return String(n).split('').map(v => parseInt(v)).reduce((a, b) => a + b)
}