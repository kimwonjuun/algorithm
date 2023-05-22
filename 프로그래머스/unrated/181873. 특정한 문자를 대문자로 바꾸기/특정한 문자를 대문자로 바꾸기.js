function solution(my_string, alp) {
    // return my_string.split("").map(v => v === alp ? v.toUpperCase() : v).join("");
    
    // replaceAll 쓰자
    return my_string.replaceAll(alp, alp.toUpperCase());

}