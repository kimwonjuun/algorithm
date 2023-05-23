function solution(arr) {
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     let num = arr[i];
    //     for (let j = 0; j < num; j++) {
    //         result.push(num);
    //     }
    // }
    // return result;
    
    // 한 줄로
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}