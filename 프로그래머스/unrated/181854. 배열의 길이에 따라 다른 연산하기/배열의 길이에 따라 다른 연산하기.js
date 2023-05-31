// function solution(arr, n) {
//     return arr.map((v, i) => 
//         (arr.length % 2 === 1 && i % 2 === 0) || (arr.length % 2 === 0 && i % 2 === 1) ? v + n : v
//     );
// }

function solution(arr, n) {
    const length = arr.length;
    const result = [];

    for (let i = 0; i < length; i++) {
        if (length % 2 === 1 && i % 2 === 0) {
            result.push(arr[i] + n); // 홀수 길이인 경우, 짝수 인덱스에 n을 더함
        } else if (length % 2 === 0 && i % 2 === 1) {
            result.push(arr[i] + n); // 짝수 길이인 경우, 홀수 인덱스에 n을 더함
        } else {
            result.push(arr[i]); // 나머지 인덱스는 그대로 추가
        }
    }

    return result;
}