function solution(my_string, num1, num2) {
    arr = my_string.split("");
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join("");
    
    // 좀 더 복잡도가 적음.
    // const arr = my_string.split("");
    // const temp = arr[num1];
    // arr[num1] = arr[num2];
    // arr[num2] = temp;
    // return arr.join("");
}