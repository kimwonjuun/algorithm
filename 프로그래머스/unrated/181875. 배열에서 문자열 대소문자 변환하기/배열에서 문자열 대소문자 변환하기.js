function solution(strArr) {
    return strArr.map((item, index) => index % 2 ? item.toUpperCase() : item.toLowerCase());
}