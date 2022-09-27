const favoriteFruits: string[] = ["apple", "strawberry", "orange"];

function addFruit(fruit: string) {
  favoriteFruits.push(fruit);
}

addFruit("Mango");

console.log({ favoriteFruits, test: "test" });
