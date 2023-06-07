function solution(d, budget) {
  let result = 0;
  const arr = d.sort((a, b) => a - b); // Sort the array in ascending order numerically

  for (let i = 0; i < arr.length; i++) {
    if (budget >= arr[i]) {
      budget -= arr[i];
      result++;
    } else {
      break; // Exit the loop if the budget is not enough for the current department
    }
  }

  return result;
}