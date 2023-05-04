function solution(s) {
    const num_arr = s.split(" ").map(Number);
    const max_num = Math.max(...num_arr);
    const min_num = Math.min(...num_arr);
    return min_num + " " + max_num;

}