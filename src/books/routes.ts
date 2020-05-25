import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import {
  fetchAllBooks,
  fetchOne,
  insertBook,
  updateBook,
} from "./controller.ts";
import handleError from "../../errorHandler.ts";

export default (app: Application) => {
  app.get("/books", (context) => handleError(context, fetchAllBooks));
  app.get("/books/:id", (context) => handleError(context, fetchOne));
  app.post("/books", (context) => handleError(context, insertBook));
  app.put("/books/:id", (context) => handleError(context, updateBook));
};
