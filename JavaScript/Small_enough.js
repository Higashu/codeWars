function smallEnough(a, limit) {
  return a.reduce((valueUnderLimit, value) => {
    return value > limit ? false : !valueUnderLimit ? false : true;
  }, true);
}
