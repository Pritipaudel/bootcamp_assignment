function checkAnimals() {
    const animals = ["dogs", "cats", "rabbits", "mice"];
    const animalList = document.getElementById("animalList");

    animals.forEach(animal => {
        const listItem = document.createElement("li");
        listItem.textContent = `${animal}: ${animal.includes("a")}`;
        animalList.appendChild(listItem);
    });
}

checkAnimals();