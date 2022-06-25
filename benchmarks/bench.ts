import Timber from '../timber.ts';
import { faker } from '../utils/deps.ts';

const timber = new Timber();
const arr1: string[] = [];
const arr2: string[] = [];

for (let i = 0; i < 1000000; ++i) {
    const randomName = faker.name.firstName();
    if (i & 1) {
        arr1.push(randomName);
    } else {
        arr2.push(randomName);
    }
}

Deno.bench("Insertion", () => {
    timber.insert('arr1', arr1);
    timber.insert('arr2', arr2);
    timber.insert("casual", "Naruto");
});

Deno.bench("Find all words", () => {
    timber.findAllWords("Naru");
});

Deno.bench("Belongs to", () => {
    timber.belongsTo("Naruto");
})

Deno.bench("Deletion", () => {
    timber.delete("Naruto");
});