const obj = {
  // index:value
  pseudo: "Ricke",
  ville: "Privas",
  admin: false,
  direBonjour: function () {
    console.log("Bonjour je suis" + " " + this.pseudo);
  },

  //Eviter les fonctions fléchés dans les objets

  // direBonjour() {
  //   console.log("Bonjour je suis" + " " + this.pseudo);
  // }
};

// Ajouter
obj.age = 35;
// ou
obj["admin"] = true;

// Modifier
obj.pseudo = "RK";

// Supprimer
delete obj.ville;

// Checker si propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir l'objet
for (const key in obj) {
  // console.log(key + " : " + obj[key]);
}
// console.log(obj.direBonjour());

// Obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);

//Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m60",
  poids: "60kg",
};

// fusionner des objets
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modoficiations
// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";

// console.log(newObj);

//----------------------
// Construire des objets
//----------------------

// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("Ricke", "Privas");
const user2 = new User("Roger", "Marseille");

// console.log(user2.getCity());

//-------------------------------
//Factory functions

function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("RIKE", "Privas");
// console.log(user4);

//-------------------------------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function() {
    console.log("Bonjour je suis " + this.pseudo);
  }
}
const user5 = new Utilisateur("Samia", "Lyon");

// EN POO NE PAS UTILISER DE FONCTION FLECHÉES ------ IMPORTANT

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
}

Object.assign(Utilisateur.prototype, {
  method1() {
    // Ma méthode
  },
  method2() {
    // Ma méthode
  }
})

// console.log(user5.sayCity());

// let array = [1, 2, 3]
// console.log(array);

// IMPORTANT------ Les fonctions déclarer dans sayMyName sont plus lente à ce jouer
//  que les fonctions déclarer dans le prototype.

//----------
//L'héritage
//----------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court ! ");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("J'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9)
console.log(rintintin);

const miko = new Cat("Miko", 5)
console.log(miko);