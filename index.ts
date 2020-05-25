import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import "https://deno.land/x/denv/mod.ts";

import bookRoutes from "./src/books/routes.ts";

const app = new Application();

const env = Deno.env.toObject();

const port = +env.PORT || 3000;

bookRoutes(app);

app.start({ port });

console.log(`running at http://localhost:${port}`);
