function solution(num_list) {
    const lastNum = num_list.slice(-2)[1];
    const lastPreNum = num_list.slice(-2)[0];
    const result = lastNum > lastPreNum ? lastNum - lastPreNum : lastNum * 2;
    
    num_list.push(result);
    return num_list;
}
