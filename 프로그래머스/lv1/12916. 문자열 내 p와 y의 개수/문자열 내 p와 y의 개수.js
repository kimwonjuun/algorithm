function solution(Pyy){
    const arr = Pyy.toLowerCase().split("");
    const p_arr = arr.filter(v => v === "p");
    const y_arr = arr.filter(v => v === "y");
    return p_arr.length === y_arr.length ? true : false;
}