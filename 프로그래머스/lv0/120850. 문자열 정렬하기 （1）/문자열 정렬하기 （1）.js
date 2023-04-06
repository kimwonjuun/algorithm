function solution(my_string) {
    // replace 메서드로 숫자만 추출 -> "12392"
    let num = my_string.replace(/[^0-9\.]+/g, "");
    // split 메서드로 각 인덱스를 가진 배열로 변환(문자가 됨) -> 숫자로 변환 ->[1,2,3,9,2]
    let arr = num.split("").map(Number);
    // sort 해주기
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr;
    
    
}