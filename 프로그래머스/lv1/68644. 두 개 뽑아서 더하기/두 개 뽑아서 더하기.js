function solution(numbers) {
    const answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if (!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }
    
    return answer.sort((a, b) => a - b);
}

// function solution(numbers) {
//     const temp = []

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }

//     const answer = [...new Set(temp)]

//     return answer.sort((a, b) => a - b)
// }