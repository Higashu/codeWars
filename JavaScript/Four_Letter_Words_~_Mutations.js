function filterArray(array, wordForbidden) {
  let itteration = array.length;
  //Chercher les mots plus longs que 4 lettres
  for (i = 0; i < itteration; ++i) {
    if (array[i].length !== 4) wordForbidden.set(array[i]);

    //Chercher les mots contenant deux fois la même lettre
    nextWord: for (j = 0; j < array[i].length; ++j) {
      for (k = 0; k < array[i].length; ++k) {
        if (array[i][k] === array[i][j] && k != j) {
          wordForbidden.set(array[i], true);
          break nextWord;
        }
      }
    }
  }
}

function generateRegExp(word) {
  let regExp = "";
  let string = word.toString();

  for (i = 0; i < string.length; ++i) {
    regExp += string.replace(string[i], "[a-z]").concat("|");
  }
  return new RegExp(regExp.substring(0, regExp.length - 1), "g");
}

function findWord(array, regexp, player) {
  if (regexp.exec(array.join(".")) !== null) {
    indexFound = Math.floor(regexp.lastIndex / 5);
    console.log(player, "found :", array[indexFound]);
  } else {
    indexFound = null;
    console.log(player, "found nothing");
  }
  return indexFound;
}

function mutations(alice, bob, word, bobFirstPlayer) {
  if (word.length !== 4) return -1;

  const wordForbidden = new Map();
  wordForbidden.set(word, true);

  console.log("Alice's :", alice);
  console.log("Bob's :", bob);

  filterArray(bob, wordForbidden);
  filterArray(alice, wordForbidden);

  console.log("The word is : ", word);
  console.log(bobFirstPlayer ? "Bob" : "Alice", "is going first !");

  let findFirstTurn = true;
  let regexp = generateRegExp([word.toString()]);
  let indexFound = null;

  if (bobFirstPlayer) {
    //bob commence
    do indexFound = findWord(bob, regexp, "bob");
    while (indexFound !== null && wordForbidden.has(bob[indexFound]));
    //Bob a trouve
    if (indexFound !== null) {
      findFirstTurn = false;
      wordForbidden.set(bob[indexFound], true);
      regexp = generateRegExp(bob.splice(indexFound, 1));
    }
  }

  while (true) {
    //Alice commence ou joue apres bob
    do indexFound = findWord(alice, regexp, "alice");
    while (indexFound !== null && wordForbidden.has(alice[indexFound]));

    if (findFirstTurn && indexFound === null && bobFirstPlayer) return -1;
    if (!findFirstTurn && indexFound === null) return 1;
    if (indexFound !== null) {
      //Le mot correspond
      if (findFirstTurn && bobFirstPlayer) return 0;
      if (findFirstTurn && !bobFirstPlayer) findFirstTurn = false;

      wordForbidden.set(alice[indexFound], true);
      regexp = generateRegExp(alice.splice(indexFound, 1));
    }

    do indexFound = findWord(bob, regexp, "bob");
    while (indexFound !== null && wordForbidden.has(bob[indexFound]));

    if (!findFirstTurn && indexFound === null) return 0;
    if (findFirstTurn && indexFound === null) return -1;
    if (indexFound !== null) {
      wordForbidden.set(bob[indexFound], true);
      regexp = generateRegExp(bob.splice(indexFound, 1));
      if (findFirstTurn) return 1;
    }
  }
}
