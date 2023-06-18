// function solution(phone_number) {
//     return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
// }

const solution = n => [...n].fill("*",0,n.length-4).join("")
