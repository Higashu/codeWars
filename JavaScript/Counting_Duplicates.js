const duplicateCount = (text) => {
  let dictionnary = new Map();

  for (i of text.toLowerCase())
    if (dictionnary.get(i) == undefined) dictionnary.set(i, 1);
    else dictionnary.set(i, dictionnary.get(i) + 1);

  let numberCharDuplicated = 0;

  for (value of dictionnary.values()) if (value != 1) ++numberCharDuplicated;

  return numberCharDuplicated;
};
