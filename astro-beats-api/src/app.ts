//https://www.moesif.com/blog/api-monetization/api-strategy/REST-API-with-node-.-js/

//create service base with express
import express from "express";
import cors from "cors";

//routes
import users from "./api/routes/users";
import horoscopes from "./api/routes/horoscopes";
import horoscopesV2 from "./api/routes/horoscopesV2";

const app = express();

/**
 * @tutorial
 * This code does a few things, but the most important thing it does is enable POST and PUT requests by giving a method for data storage.
 * “app.use(express.json());” allows our service to process JSON objects, and “app.use(express.urlencoded({ extended: false }));” allows
 * us to process data as strings or arrays.
 */

//register dependencies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", users);
app.use("/api/horoscopes", horoscopes);
app.use("/api/horoscopes/v2", horoscopesV2);
/**
 * This will allow CORS requests from any origin. If you want to restrict CORS requests to specific origins, you can pass an options
 * object to the cors() function. For example: 
 * app.use(cors({
    origin: 'http://example.com'
    }));
 */

/**
 * @tutorial
 * Now that we have created the skeleton, we need to actually set a listening port. This code instructs our service to listen to port 3001, and
 * to log to the console a “Ready” state, which lets us know it is ready to process requests:
 */

app.listen(3001, () => console.log("Ready"));

//head to http://localhost:3001/api/users to see the data

export default app;
