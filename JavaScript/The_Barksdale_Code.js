function decode(string) {
  let dictionnary = new Map();
  dictionnary.set("1", 9);
  dictionnary.set("2", 8);
  dictionnary.set("3", 7);
  dictionnary.set("4", 6);
  dictionnary.set("5", 0);
  dictionnary.set("6", 4);
  dictionnary.set("7", 3);
  dictionnary.set("8", 2);
  dictionnary.set("9", 1);
  dictionnary.set("0", 5);

  let res = "";

  for (char of string.split("")) {
    res += dictionnary.get(char);
  }

  return res;
}
