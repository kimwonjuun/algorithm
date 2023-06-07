function solution(d, budget) {
    
//     let result = 0;
//     const arr = d.sort((a, b) => a - b);

//     for (let i = 0; i < arr.length; i++) {
//         if (budget >= arr[i]) {
//             budget -= arr[i];
//             result++;
//         } else {
//             break;
//         }
    
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}