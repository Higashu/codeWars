function mix(s1, s2) {
  mapS1 = new Map();
  mapS2 = new Map();

  console.log(s1, s2);

  for (char of s1.replace(/\s/g, "")) {
    if (!mapS1.has(char)) mapS1.set(char, 1);
    else mapS1.set(char, mapS1.get(char) + 1);
  }
  for (char of s2.replace(/\s/g, "")) {
    if (!mapS2.has(char)) mapS2.set(char, 1);
    else mapS2.set(char, mapS2.get(char) + 1);
  }

  for (map of mapS1) {
    if (map[1] === 1) mapS1.delete(map[0]);
  }
  for (map of mapS2) {
    if (map[1] === 1) mapS2.delete(map[0]);
  }
  mapS1 = new Map([...mapS1.entries()]);
  mapS2 = new Map([...mapS2.entries()]);

  let spreadMapS1 = [...mapS1.entries()].map(
    (value) => (value = [value[0], value[1], 1])
  );
  let spreadMapS2 = [...mapS2.entries()].map(
    (value) => (value = [value[0], value[1], 2])
  );

  joinedArray = [...spreadMapS1, ...spreadMapS2].sort((a, b) => b[1] - a[1]);
  console.log(joinedArray);

  let resultat = [];

  for (i = 0; i < joinedArray.length; ++i) {
    if (joinedArray[i][2] === 1) {
      if (mapS2.has(joinedArray[i][0])) {
        if (mapS2.get(joinedArray[i][0]) <= joinedArray[i][1]) {
          resultat.push(joinedArray[i]);
        }
      } else if (!mapS2.has(joinedArray[i][0])) resultat.push(joinedArray[i]);
    } else {
      if (mapS1.has(joinedArray[i][0])) {
        if (mapS1.get(joinedArray[i][0]) <= joinedArray[i][1])
          resultat.push(joinedArray[i]);
      } else if (!mapS1.has(joinedArray[i][0])) resultat.push(joinedArray[i]);
    }
  }

  let indexToRemove = [];
  for (i = 0; i < resultat.length; ++i) {
    for (j = 0; j < resultat.length; ++j) {
      if (
        resultat[i][0] == resultat[j][0] &&
        resultat[i][1] == resultat[j][1] &&
        i != j
      ) {
        resultat.splice(j, 1);
        resultat[i][2] = 3;
        break;
      }
    }
  }

  resultat = resultat
    .sort((a, b) => {
      if (a[1] != b[1]) return a[1] - b[1];
      else if (a[2] != b[2]) return b[2] - a[2];
      else return b[0].charCodeAt() - a[0].charCodeAt();
    })
    .reverse();

  resultString = "";

  for (i = 0; i < resultat.length; ++i) {
    if (resultat[i][2] == 3) resultString += "/=:";
    else resultString += "/" + resultat[i][2] + ":";

    for (j = 0; j < resultat[i][1]; ++j) {
      resultString += resultat[i][0];
    }
  }
  return resultString.substr(1);
}
