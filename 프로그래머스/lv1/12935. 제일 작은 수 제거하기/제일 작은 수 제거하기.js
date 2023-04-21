function solution(arr) {
    let min_num = Math.min(...arr);
    let index = arr.indexOf(min_num);
    arr.splice(index, 1);
    return arr.length > 0 ? arr : [-1];
}