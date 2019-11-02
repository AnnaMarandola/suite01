/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

//  écrire votre code sous ce commentaire
function isEven(i){
  if(i % 2 == 0){
    return 1;
  }else{
    return 0;
  }
}



function boostedEvenAddition (arr){
  let sumOfEvens = 0;
  let arrOfEvens = arr.filter(isEven)
//  console.log(arrOfEvens);
  for (let i=0; i < arrOfEvens.length; i++){
    sumOfEvens += arrOfEvens[i]
  }

  return sumOfEvens;
}
/*
  Test 1
  Résultat attendu : 10
*/

console.log(boostedEvenAddition([4, 5, 6]));

/*
  Test 2
  Résultat attendu : 44
*/

console.log(boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]));

/* DO NOT TOUCH */
module.exports = {
  boostedEvenAddition: boostedEvenAddition
}
