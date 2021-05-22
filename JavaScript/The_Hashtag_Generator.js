const generateHashtag = (string) => {
  if (string.trim() == "") return false;
  if (string.replace(/ */g, "").length >= 140) return false;
  return (
    "#" +
    string
      .replace(/ {2,}/g, " ")
      .split(" ")
      .map((value) => value[0].toUpperCase() + value.substr(1))
      .join("")
      .replace(/ */g, "")
  );
};
