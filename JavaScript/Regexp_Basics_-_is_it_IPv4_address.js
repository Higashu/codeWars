String.prototype.ipv4Address = function () {
  let temp = this.split(".");
  for (i = 0; i < temp.length; ++i) {
    if (temp[i].match(/(^|\D)0[0-9]/) || temp[i] > 255) return false;
  }

  let regExpMatch = this.match(/^(\d{1,3}\.){3}(\d{1,3})$/g);
  if (regExpMatch) {
    return true;
  }
  return false;
};
