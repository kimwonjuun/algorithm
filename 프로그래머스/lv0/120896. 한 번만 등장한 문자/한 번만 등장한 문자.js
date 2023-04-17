function solution(s) {
    // 배열 변환 -> 필터 메서드 이용 한 번만 등장하는 문자 출력
    let unique_text = s.split("").filter(v => s.indexOf(v) === s.lastIndexOf(v));
    // 배열 sort 후 문자열 재변환
    return unique_text.sort().join("");
}