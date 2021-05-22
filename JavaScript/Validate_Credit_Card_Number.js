const validate = (n) => {
  const evenNumberOfDigit = n.toString().length % 2 === 0;

  let sum = n
    .toString()
    .split("")
    .map((value, index) => {
      value = parseInt(value);
      if ((index + 1) % 2 !== 0 && evenNumberOfDigit) value *= 2;
      if ((index + 1) % 2 === 0 && !evenNumberOfDigit) value *= 2;
      if (value > 9) return (value -= 9);
      else return value;
    })
    .reduce((res, value) => {
      return (res += value);
    }, 0);
  return sum === 0 ? false : sum % 10 === 0;
};
