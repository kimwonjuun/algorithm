function solution(numbers) {
    let sortedNumbers = numbers.sort((a,b)=>b-a).slice(0, 2)
    return sortedNumbers[0] * sortedNumbers[1]
}