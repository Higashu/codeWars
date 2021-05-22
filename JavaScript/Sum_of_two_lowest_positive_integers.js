function sumTwoSmallestNumbers(numbers) {
  return numbers.length === 1
    ? numbers[0]
    : numbers.sort((a, b) => a - b)[0] + numbers[1];
}
