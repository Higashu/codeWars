const findCorrespondingParenthese = (operandes, indexOpenParenthese) => {
  let innerParentheses = 0;
  for (let i = indexOpenParenthese + 1; i < operandes.length; ++i) {
    if (operandes[i] === '(') innerParentheses++;
    else if (operandes[i] === ')' && innerParentheses !== 0) innerParentheses--;
    else if (operandes[i] === ')' && innerParentheses === 0) return i;
  }
  return -1;
};

const Calculator = function () {
  this.evaluate = (calcul) => {
    const operandes = calcul.split(' ');

    let indexOpenParenthese = operandes.indexOf('(');
    let indexCloseParenthese = findCorrespondingParenthese(
      operandes,
      indexOpenParenthese
    );

    while (indexOpenParenthese !== -1 && indexCloseParenthese !== -1) {
      let resParentheses = this.evaluete(
        operandes.slice(indexOpenParenthese + 1, indexCloseParenthese).join(' ')
      );
      operandes.splice(
        indexOpenParenthese,
        indexCloseParenthese - indexOpenParenthese + 1,
        resParentheses
      );
      indexOpenParenthese = operandes.indexOf('(');
      indexCloseParenthese = findCorrespondingParenthese(
        operandes,
        indexOpenParenthese
      );
    }

    while (operandes.length > 1) {
      mutation_tableau: for (let i = 0; i < operandes.length; ++i) {
        let res = 0;
        switch (operandes[i]) {
          case '*':
            res = parseFloat(operandes[i - 1]) * parseFloat(operandes[i + 1]);
            operandes.splice(i - 1, 3, res);
            break mutation_tableau;
          case '/':
            res = parseFloat(operandes[i - 1]) / parseFloat(operandes[i + 1]);
            operandes.splice(i - 1, 3, res);
            break mutation_tableau;
          case '+':
            if (operandes[i + 2] !== '/' && operandes[i + 2] !== '*') {
              res = parseFloat(operandes[i - 1]) + parseFloat(operandes[i + 1]);
              operandes.splice(i - 1, 3, res);
              break mutation_tableau;
            } else continue;
          case '-':
            if (operandes[i + 2] !== '/' && operandes[i + 2] !== '*') {
              res = parseFloat(operandes[i - 1]) - parseFloat(operandes[i + 1]);
              operandes.splice(i - 1, 3, res);
              break mutation_tableau;
            } else continue;
          default:
            continue;
        }
      }
    }
    return parseFloat(operandes);
  };
};
