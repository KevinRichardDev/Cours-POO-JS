const obj = {
  // index:value
  pseudo: "Ricke",
  ville: "Privas",
};

// Ajouter
obj.age = 35;

// Modifier
obj.pseudo = "RK";

// Supprimer
delete obj.ville;
// console.log(obj);

// Checker si propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir l'objet
for (const key in obj) {
  console.log(key);
}
