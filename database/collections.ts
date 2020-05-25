import db from "./database.ts";

export default {
  books: db.getDatabase.collection("books")
};
