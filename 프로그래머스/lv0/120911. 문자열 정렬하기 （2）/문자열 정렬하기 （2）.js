function solution(my_string) {
    // 소문자 변환
    let lower_str = my_string.toLowerCase();
    // 문자열 배열 변환 -> sort -> 배열 문자열 변환
    return lower_str.split("").sort().join("");
}