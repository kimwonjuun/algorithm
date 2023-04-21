function solution(arr) {
    // 가장 작은 수 구하기 Math.min()
    let min_num = Math.min(...arr);
    // 가장 작은 수의 인덱스 구하기
    let index = arr.indexOf(min_num);
    // 배열의 가장 작은 수 제거
    arr.splice(index, 1);
    // 배열의 길이가 1 이상이면 배열 출력 아니면 [-1] 출력
    return arr.length > 1 ? arr : [-1];
}