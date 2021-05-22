function songDecoder(song) {
  return song
    .split("WUB")
    .join(" ")
    .split(/( ){2,}/g)
    .join("")
    .trim();
}
