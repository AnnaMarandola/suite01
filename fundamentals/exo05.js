/*
  Déclaration d'une fonction

  Ecrire une fonction "returnArg"
  qui retourne le contenu de la variable qu'elle reçoit en argument

  Prototype:
    returnArg(arg);
*/

//  écrire votre code sous ce commentaire
function returnArg (i){
  return i
}


/*
  Test 1
  Résultat attendu : "Hello"
*/

console.log(returnArg('Hello'));

/*
  Test 2
  Résultat attendu : "3"
*/

console.log(returnArg(3));

/*
  Test 3
  Résultat attendu : false
*/

console.log(returnArg(false));


/* DO NOT TOUCH */
module.exports = {
    returnArg: returnArg
}
