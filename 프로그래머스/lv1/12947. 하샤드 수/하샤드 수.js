function solution(x) {
    const sum = x.toString().split("").map(Number).reduce((a, b) => a + b, 0);
    return x % sum === 0 ? true : false;
}