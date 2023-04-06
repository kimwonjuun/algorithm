function solution(cipher, code) {
    // 각 문자를 가진 배열로 변환 -> ["d","f","j","a","r","d","s","t","d","d","e","t","c","k","d","a","c","c","c","c","d","e","g","k"]
    let arr = cipher.split("");
    // 배열에서 code의 배수 번째 인덱스만 추출 -> ["a","t","t","a","c","k"] 
    let filteredArr = arr.filter((v, i) => (i + 1) % code === 0);
    // 배열 -> 문자 변경
    return filteredArr.join("");
    
}