const decodeMorse = (message) => {
  return message
    .trim()
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((letter) => MORSE_CODE[letter])
        .join("")
    )
    .join(" ");
};
