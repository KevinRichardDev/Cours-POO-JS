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

console.log(user2.getCity());
