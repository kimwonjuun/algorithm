function solution(numbers, direction) {
  if (direction === "right") {
    let last_element = numbers.pop();
    numbers.unshift(last_element);
  } else if (direction === "left") {
    let first_element = numbers.shift();
    numbers.push(first_element);
  }
  return numbers;
}