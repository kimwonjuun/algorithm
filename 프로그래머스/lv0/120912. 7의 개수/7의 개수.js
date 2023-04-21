function solution(array) {
    let arr = array.join("").split("");
    return arr.filter(v => v === "7").length;
}