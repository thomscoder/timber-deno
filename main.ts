import { Timber } from "https://deno.land/x/timberjs@timber/mod.ts";
import {faker} from './utils/deps.ts'

const arr = Array.from({length: 100}, () => {
    return faker.name.firstName();
})
const arr2 = Array.from({ length: 800 }, () => {
    return faker.name.firstName();
});


const timber = new Timber();
timber.insert('imaginary', "Voldemort");
timber.insert('imaginary', "Naruto");
timber.insert("arr", arr);
timber.insert("arr2", arr2);

console.log(timber.search("Thomas")); // Thomas | undefined
console.log(timber.findAllWords("Vold")); // ["Voldemort"]
console.log(timber.delete("Voldemort")); // undefined
console.log(timber.belongsTo("Naruto")); // ["imaginary"]