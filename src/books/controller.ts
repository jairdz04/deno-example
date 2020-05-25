import {
  HandlerFunc,
  Context
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";

import IBook, { mapper, format } from "./model.ts";
import collections from "../../database/collections.ts";

export const fetchAllBooks: HandlerFunc = async (context: Context) => {
  const fetchedBooks: IBook[] = await collections.books.find();

  return context.json(mapper(fetchedBooks), 200);
};

export const fetchOne: HandlerFunc = async (context: Context) => {
  const { id } = context.params as { id: string };

  const book = await collections.books.findOne({ _id: { "$oid": id } });

  return context.json(format(book), book ? 200 : 404);
};

export const insertBook = async (context: Context) => {
  const body = await (context.body());
  const { isbn, author, title } = body;

  const saved = await collections.books.insertOne(
    { isbn, author, title },
  );
  return context.json(saved, 201);
};

export const updateBook = async (context: Context) => {
  const { id } = context.params as { id: string };
  const { isbn, author, title } = await (context.body());

  const { modifiedCount } = await collections.books.updateOne(
    { _id: { "$oid": id } },
    { $set: { isbn, author, title } },
  );

  return context.json({ msg: "Modified" }, modifiedCount ? 200 : 304);
};
