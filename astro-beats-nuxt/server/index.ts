import { Nitro } from "nitropack";
import createError from "http-errors";

//synchronous function to excecute every time the web application is started; to ensure MongoDB is connected

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  try {
    console.log("server started");
  } catch (err) {
    console.log(err);
    throw createError({
      statusCode: 500,
      statusMessage: `Internal Server Error: ${err}`,
    });
  }
};
