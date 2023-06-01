// function solution(myString) {
//     return myString
//         .split("")
//         .map(v => v === "a" ? v.toUpperCase() : v === v.toUpperCase() ? v.toLowerCase() : v)
//         .join("");
// }

function solution(myString) {
    return myString.split("").map((v) => {
        if (v === "a") {
            return v.toUpperCase();
        } else if (v !== "A" && v === v.toUpperCase()) {
            return v.toLowerCase();
        } else {
            return v;
        }
    }).join('');
}