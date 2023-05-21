function solution(num_list) {
    const even_num = Number(num_list.filter(v => v % 2 === 0).join(""));
    const odd_num = Number(num_list.filter(v => v % 2 !== 0).join(""));
    return even_num + odd_num;
}