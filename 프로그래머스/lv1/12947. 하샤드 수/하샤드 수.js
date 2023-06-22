// function solution(x) {
//     const sum = x.toString().split("").map(Number).reduce((acc, cur) => acc + cur, 0);
//     return x % sum === 0 ? true : false;
// }

function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}