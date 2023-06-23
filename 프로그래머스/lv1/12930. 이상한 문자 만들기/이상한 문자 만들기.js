function solution(s) {
    return s.split(" ").map((word) => {
        let result = "";
        for (let i = 0; i < word.length; i++){
            i % 2 === 0 ? result += word[i].toUpperCase() : result += word[i].toLowerCase();
        }
        return result;
    }).join(" ");
}
