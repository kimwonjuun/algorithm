function solution(box, n) {
    // 일일이 작성
    // return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    // reduce 메서드 사용
    // 시간 복잡도는 reduce 메서드를 사용하지 않는 것이 4개 중 3개 테스트에서 0.01ms 빠름
    // return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
    // map 메서드 사용
    return box.map(v => parseInt(v / n)).reduce((acc, cur) => acc * cur);
}