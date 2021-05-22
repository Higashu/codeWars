const countBits = (n) => {
  //On convertie le nombre en binaire avec toString(2)
  //Puis on convertit le resultat en un tableau de bit
  return n
    .toString(2)
    .split("")
    .reduce((accumulateur, valeur) => {
      //On ittère sur le tableau avec la methode reduce pour reduire le tableau a une seule variable
      return valeur === "1" ? (accumulateur += 1) : accumulateur;
    }, 0);
};
