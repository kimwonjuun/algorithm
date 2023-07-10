function solution(s) {
     arr = s.split(' ');
    console.log(...arr)
    return Math.min(...arr)+' '+Math.max(...arr);
}