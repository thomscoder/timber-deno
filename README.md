# TimberJS for Deno 🍃

Find strings in large arrays fast.

Timber implements a Prefix Tree under the hood and allows a fast string search in hundred thousands of entries.
<h3>Import</h3>

```javascript
// Either...
import { Timber } from "https://deno.land/x/timberjs@timber/mod.ts";
// or...
import { Timber } from "https://raw.githubusercontent.com/thomscoder/timber-deno/master/mod.ts"
```

<h2><b>Usage</b></h2>

```javascript
// Import timber
import { Timber } from "https://deno.land/x/timberjs@timber/mod.ts";

// Random names generator
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const arr = Array.from({length: 100}, () => {
    const randomName = faker.name.firstName();
    return randomName;
});

const timber = new Timber();
// Insert an entire array...
timber.insert(arr);

// ...or a single string passing an identifier (e.g. the variable that contains that value or a category)
timber.insert("imaginary", "Voldemort");

// Find the word
timber.search("Voldemort"); // Voldemort
// Find all words that start with given Prefix
timber.findAllWords("Vold"); // ["Voldemort", ...]
// Get the identifier
timber.belongsTo("Voldemort"); // ["imaginary"]
// Delete a word
timber.delete("Voldemort");
```

Follow the ./main.ts or the ./tests/test.ts files to see some examples