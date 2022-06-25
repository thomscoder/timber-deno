import { Timber } from "https://raw.githubusercontent.com/thomscoder/timber-deno/master/mod.ts";
import {faker} from './utils/deps.ts'

const arr = Array.from({length: 20483}, () => {
    return faker.name.firstName();
})
const arr2 = Array.from({ length: 10800 }, () => {
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