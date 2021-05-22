const pgcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
};

const ppcm = (a, b) => {
  return (a * b) / pgcd(a, b);
};

const computeLowest = (denominateur) => {
  console.log(denominateur);
  if (denominateur.length === 0) return 0;
  else if (denominateur.length === 2)
    return ppcm(denominateur[0], denominateur[1]);
  else return ppcm(denominateur[0], computeLowest(denominateur.splice(1)));
};

const convertFrac = (lst) => {
  let denominateurs = [];

  for (i = 0; i < lst.length; ++i) denominateurs.push(lst[i][1]);

  let ppcm = computeLowest(denominateurs);
  if (ppcm === "") return "";

  let response = "";
  for (i = 0; i < lst.length; ++i) {
    response += "(" + (lst[i][0] * ppcm) / lst[i][1] + "," + ppcm + ")";
  }
  return response;
};
