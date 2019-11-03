/*
  Ecrire une fonction "editStringAt"
  qui modifie une chaine de caractères à une certaine position.
  La fonction retourne cette même chaine de caractères avec les modifications attendues.
  
  Prototype:
      str editStringAt(str, position, char);
*/

//  écrire votre code sous ce commentaire
function editStringAt(str1, i, str) {
  let letterRem = str1.charAt(i);
  let newstr = str1.replace(letterRem, str)
  return newstr
}
/*
  Test 1
  Résultat attendu : "Bondour"
*/
console.log(editStringAt("Bonjour", 3, "d"));

/*
  Test 2
  Résultat attendu : "Hello World"
*/
console.log(editStringAt("Hello world", 6, "W"));

/* DO NOT TOUCH */
module.exports = {
  editStringAt: editStringAt
}
