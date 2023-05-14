function solution(absolutes, signs) {
    const arr = [];
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? arr.push(absolutes[i]) : arr.push(-absolutes[i]);
    }
    return arr.reduce((acc, cur) => acc + cur, 0);
}