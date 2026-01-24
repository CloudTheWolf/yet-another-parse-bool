# yet-another-parse-bool

A tiny, dependency-free utility for turning *anything* into a boolean.

Perfect for environment variables (`VITE_DEBUG=true`), config files, CLI flags, and general “is this enabled?” parsing.

##  Install

```bash
npm install yet-another-parse-bool
```


## Usage
### ESM (Vite / Bun / modern Node)

```js
import parseBool from "yet-another-parse-bool";
// or: import { parseBool } from "yet-another-parse-bool";

parseBool(true);          // true
parseBool(false);         // false
parseBool(1);             // true
parseBool(0);             // false
parseBool(" TRUE ");      // true
parseBool("enabled");     // false
parseBool(null);          // false
parseBool(undefined);     // false
parseBool({});            // false
```

### CommonJS (Node require)

```js 
const parseBool = require("yet-another-parse-bool");
// or: const { parseBool } = require("yet-another-parse-bool";

parseBool(true);          // true
parseBool(false);         // false
parseBool(1);             // true
parseBool(0);             // false
parseBool(" TRUE ");      // true
parseBool("enabled");     // false
parseBool(null);          // false
parseBool(undefined);     // false
parseBool({});            // false
```
