function solution(num_list) {
    
    let evenNum = num_list.filter(v => v % 2 === 0).length;
    let oddNum = num_list.filter(v => v % 2 === 1).length;
    return arr = [evenNum, oddNum];
}

// 너무 멍청함.