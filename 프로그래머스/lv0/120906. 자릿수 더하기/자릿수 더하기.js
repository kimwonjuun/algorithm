function solution(n) {
    return String(n).split('').map(v => parseInt(v)).reduce((a, b) => a + b)

}