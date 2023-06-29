// function solution(t, p) {
//     const tNum = Number(t);
//     const pNum = Number(p);
    
//     let count = 0;
    
//     for (let i = 0; i <= t.length - p.length; i++) {
//         const substring = t.slice(i, i + p.length);
//         const substringNum = Number(substring);
        
//         if (pNum >= substringNum) { 
//             count++;
//         }
//     }
    
//     return count;
// }

function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
}