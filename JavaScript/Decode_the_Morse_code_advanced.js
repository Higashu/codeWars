const decodeMorse = (message) => {
  return message
    .trim()
    .split("   ")
    .map((word) => {
      return word
        .split(" ")
        .map((letter) => {
          return MORSE_CODE[letter];
        })
        .join("");
    })
    .join(" ");
};

const getFacteurMultiplication = (bits) => {
  let shortestFactor = Infinity;
  var tempFactor = 1;

  for (i = 1; i < bits.length; ++i) {
    if (bits[i] === bits[i - 1]) tempFactor = tempFactor + 1;
    else {
      if (tempFactor < shortestFactor) {
        shortestFactor = tempFactor;
      }
      tempFactor = 1;
    }
  }

  return shortestFactor;
};

const decodeBits = (bits) => {
  while (bits[0] === "0") bits = bits.substr(1);

  for (i = bits.length - 1; i >= 0; --i) {
    if (bits[i] == "0") bits = bits.slice(0, -1);
    else break;
  }

  const factor = getFacteurMultiplication(bits);
  //On remet l'unite de temps à 1 à faire...
  arrayBits = [];
  console.log(factor);
  bits.split("").forEach((element, index) => {
    if (index % factor == 0) {
      arrayBits.push(element);
    }
  });

  return arrayBits
    .join("")
    .replace(/0000000/g, "   ")
    .replace(/111/g, "-")
    .replace(/1/g, ".")
    .replace(/000/g, " ")
    .replace(/0/g, "");
};
