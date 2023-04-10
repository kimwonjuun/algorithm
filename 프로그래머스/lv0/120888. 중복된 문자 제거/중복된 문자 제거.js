function solution(my_string) {
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        if (result.indexOf(my_string[i]) === -1) {
            result += my_string[i];
        }
    }
    return result;
}