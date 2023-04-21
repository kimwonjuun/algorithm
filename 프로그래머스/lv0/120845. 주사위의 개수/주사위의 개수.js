function solution(box, n) {
    // 일일이 작성
    // return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    // reduce 메서드 사용
    return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
}