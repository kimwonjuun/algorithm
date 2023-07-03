function solution(a, b) {
    // return Number('' + a + b) > Number('' + b + a) ? Number('' + a + b) : Number('' + b + a); 
    return Math.max(Number('' + a + b), Number('' + b + a));
}