function solution(n) {
//     const tenary = n.toString(3);
//     const reversed_tenary = tenary.split("").reverse().join("");
//     const base = parseInt(reversed_tenary, 3);
//     return base;
    
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}