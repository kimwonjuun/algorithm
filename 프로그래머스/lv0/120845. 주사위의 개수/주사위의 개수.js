function solution(box, n) {
    // 일일이 작성. (가장 빠름)
    // return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
    //
    // reduce 메서드 사용 시간 복잡도는 reduce 메서드를 사용하면 일일이 작성한 식보다 0.01ms ~ 0.03ms 까지 느림
    return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
    //
    // map 메서드 사용. (가장 느림)
    // return box.map(v => parseInt(v / n)).reduce((acc, cur) => acc * cur);
}