function solution(arr, divisor) {
    const filteredArr = arr.filter(v => v % divisor === 0);
    return filteredArr.length > 0 ? filteredArr.sort((a, b) => a - b) : [-1];
}