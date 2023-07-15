function solution(array, commands) {
    return commands.map(command => {
        const [i, j, k] = command;
        const slicedArray = array.slice(i - 1, j);
        const sortedArray = slicedArray.sort((a, b) => a - b);
        return sortedArray[k - 1];
    });
}