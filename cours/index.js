const obj = {
  // index:value
  pseudo: "Ricke",
  ville: "Privas",
  admin: false,

  direBonjour() {
    console.log("Bonjour");
  }
};

// Ajouter
obj.age = 35;
// ou
obj["admin"] = true

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
console.log(obj);
