function solution(num_list) {
    
    let oddNum = 0;
    let evenNum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        i % 2 ? oddNum += num_list[i] : evenNum += num_list[i];
        
    }
    
    return Math.max(oddNum, evenNum);
}