function solution(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        let divisors = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisors++;
            }
        }
        divisors % 2 === 0 ? sum += i : sum -= i;
    }
    return sum;
}