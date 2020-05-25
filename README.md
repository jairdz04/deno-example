# REST Api with Deno JS , TypeScript and Mongo DB.

Introducing DenoJS as `A secure runtime for JavaScript and TypeScript`.
To learn more go to <a href="https://deno.land/"> Deno Website </a>

## Installation guide.

- <a href="https://deno.land/#installation">  Install Deno </a>
- <a href="https://docs.mongodb.com/manual/installation/">  Install MongoDB </a>  
- Execute `git clone https://github.com/jairdz04/deno-example`
- Run `deno run --allow-write --allow-read --allow-plugin --allow-net --allow-env --unstable index.ts`
 
### Routes definition

- `GET /books` 
- `GET /books/:id` 
- `POST /books` 
- `PUT /books/:id` 


### Books Definition

```
{
  _id: object { "$oid": string }
  isbn: string;
  author: string;
  title: string;
}
```
