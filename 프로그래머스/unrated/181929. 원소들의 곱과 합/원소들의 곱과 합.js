function solution(num_list) {
    let sum = 0;
    let pro = 1;
    for (let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        pro *= num_list[i];
    }
    return pro < sum * sum ? 1 : 0;
}