import Timber from "https://deno.land/x/timberjs@first_release/mod.ts";

const arr = ["Midoriya", "Thomas", "John", "Mamma"];
const arr2 = ["Thomas", "Hunter", "Deku", "Lio", "Naruto"]
const timber = new Timber();
timber.insert("arr", arr);
timber.insert("arr2", arr2);

console.log(timber.search("Thomas"));
console.log(timber.findAllWords("Naru"));
console.log(timber.delete("Thomas"));
console.log(timber.belongsTo("Thomas"));