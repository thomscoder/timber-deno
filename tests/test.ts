import { assertEquals, assertNotEquals, faker } from '../utils/deps.ts'
import Timber from '../timber.ts';

const timber: Timber = new Timber();
const arr: string[] = [];
for(let i = 0; i < 1000000; i++) {
    const randomName: string = faker.name.firstName();
    arr.push(randomName);
}
timber.insert('arr', "Naruto");

Deno.test("Insertion", () => {
    timber.insert("arr", arr);
    assertEquals(timber.search("Naruto"), "Naruto");
});

Deno.test("Belongs to", () => {
    assertEquals(timber.belongsTo("Naruto"), ["arr"]);
});

Deno.test("Find all words", () => {
    assertEquals(timber.findAllWords("Naru"), ["Naruto"]);
});

Deno.test("Deletion",() => {
    timber.delete("Naruto");
    assertNotEquals(timber.search("Naruto"), "Naruto");
});