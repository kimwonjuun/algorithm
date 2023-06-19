// function solution(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         if (n % i === 0) sum += i;
//     }
//     return sum;
// }

function solution(n, a=0, b=0) {
    return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}