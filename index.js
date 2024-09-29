// alert("salut les foufous")

let variable = "hello";
// console.log(variable);

//**** VARIABLES ****//*

//  const -> (constante) ce type de variable ne peut plus être modifié après affectation
//  var -> vieux Javascript
//  let -> variable qui peut évoluer en fonction des besoins

let chaine = "Je suis une chaîne de caratères";

// CONCATENATION
let chaine2 = "Je suis la suite de " + chaine;

// Backticks -> guillemets de la touche 7
// Utilisation de ${} accolades avec les backticks
let chaine3 = `Je suis la suite de ${chaine2}`;
// console.log(chaine3);

//*** Les Types de données ***//
let string = "Je suis une chaîne de caractères";
let number = 24;
let boolean = true;
// Tableau
let array = ["je", "suis", 47, true];
// Objet avec une clef et une valeur
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

// C'est possible de créer une variable à définir dans la suite du projet
let arbre;

//*** Les Opérateurs ***//
// Shift + Alt + Flèche du bas pour dupliquer une lignes
// console.log(5 + 4);
// console.log(5 - 4);
// console.log(5 / 4);
// console.log(5 * 4);
// // Puissance
// console.log(5 ** 4);

//*** Les Opérateurs d'affectation ***//

let total = 0;
total = total + 1;
total++;
total--;
total += 5;
total -= 5;
total *= 5;
// console.log(total);

//*** Les Structures de contrôle ***//
let x = 5;
let y = "5";

// if (x > y) {
//   alert("Yes");
// } else if (x < y) {
//   alert("No");
// } else {
//   alert("Ils sont égaux");
// }

// On teste sir la variabl est true
// if (x) {
//   alert("x existe!");
// }

// === Teste l'égalité en type et en contenu
// == Teste l'égalité de valeur sans prendre en compte le type
// if (x == y) {
//   console.log("Ils sont égaux");
// } else {
//   alert("Ils sont différents");
// }

// || ou
// && et

// if (x < y || x > 6) {
//   console.log("oui");
// }

// if (x < y && x > 6) {
//   console.log("oui");
// }

//*** Les FONCTIONS***//

// Fonction classique à l'ancienne
// function doSomething() {
//   console.log("I'm processing something");
//   console.log(5 + 6);
//   alert("Calcul terminé!");
// }

// Appel de la fonction indispensable
// doSomething();

// Fonction fléchée
// const addition = (a, b) => {
//   console.log(a + b);
// };

// addition(2, 3);

//*** La portée des variables ***//

function add2() {
  let a = 2;
  // return permet de retrouner les choses ou mettre fin à une fonction
  // return a + 2;
  console.log(a + 2);
}

add2();
