function solution(n) {
    array = String(n).split('').map(v => parseInt(v)).reduce((a, b) => a + b)
    return array
    // return array.reduce((a, b) => a + b)
}