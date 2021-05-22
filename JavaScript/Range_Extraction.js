const solution = (list) => {
  list.sort((a, b) => a - b);
  let res = "";
  let sequence = false;

  for (i = 0; i < list.length; ++i) {
    if (sequence && Math.abs(list[i] - list[i + 1]) !== 1) {
      res = res + "-" + list[i];
      sequence = false;
    } else if (
      !sequence &&
      Math.abs(list[i] - list[i + 1]) === 1 &&
      Math.abs(list[i + 1] - list[i + 2]) === 1
    ) {
      sequence = true;
      res = res + "," + list[i];
    } else if (!sequence) res = res + "," + list[i];
  }
  return res.substring(1);
};
