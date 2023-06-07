function solution(d, budget) {
    
    let result = 0;
    const arr = d.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        if (budget >= arr[i]) {
            budget -= arr[i];
            result++;
        } else {
            break;
        }
    }
    
    return result;
}

