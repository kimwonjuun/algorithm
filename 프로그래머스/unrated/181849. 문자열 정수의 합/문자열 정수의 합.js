function solution(num_str) {
    const num_arr = num_str.split("").map(Number);
    return num_arr.reduce((acc, cur) => acc + cur, 0);
}