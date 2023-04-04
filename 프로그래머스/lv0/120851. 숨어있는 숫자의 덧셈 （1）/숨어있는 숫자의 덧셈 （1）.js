function solution(my_string) {
    // 숫자만 추출하는 정규식
    let regex = /[^0-9]/g;
    // replace 메서드로 정규식만 찾음 -> "1234"
    let str = my_string.replace(regex, "");    
    // split 메서드로 단일 문자열로 변환 -> ["1","2","3","4"]
    let arr = str.split("");
    // reduce 메서드로 배열 합산 및 문자->숫자 변환
    let sum = arr.reduce((a, b) => a + parseInt(b), 0);
    return sum;
}