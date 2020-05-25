import {
  Context
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";

export default (context: Context, funct: Function) =>
  funct(context).catch((error: Error) => {
    return context.json({
      url: context.path,
      method: context.method,
      error: { msg: error.message, stack: error.stack },
    }, 500);
  });
