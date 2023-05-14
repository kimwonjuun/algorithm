function solution(absolutes, signs) {
    // const arr = [];
    // for (let i = 0; i < absolutes.length; i++) {
    //     signs[i] ? arr.push(absolutes[i]) : arr.push(-absolutes[i]);
    // }
    // return arr.reduce((acc, cur) => acc + cur, 0);
    
    // reduce 안에 넣어서 한 줄에 끝낼 수 있음
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}