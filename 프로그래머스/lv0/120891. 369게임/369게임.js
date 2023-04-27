function solution(order) {
    let num_arr = order.toString().split("");
    return num_arr.filter(v => v === "3" || v === "6" || v === "9").length;
}