//https://www.moesif.com/blog/api-monetization/api-strategy/REST-API-with-node-.-js/

//create service base with express
import express from "express";
import users from "./api/users";

const app = express();

/**
 * @tutorial
 * This code does a few things, but the most important thing it does is enable POST and PUT requests by giving a method for data storage.
 * “app.use(express.json());” allows our service to process JSON objects, and “app.use(express.urlencoded({ extended: false }));” allows
 * us to process data as strings or arrays.
 */

//register dependencies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", users);

/**
 * @tutorial
 * Now that we have created the skeleton, we need to actually set a listening port. This code instructs our service to listen to port 3001, and
 * to log to the console a “Ready” state, which lets us know it is ready to process requests:
 */

app.listen(3001, () => console.log("Ready"));

//head to http://localhost:3001/api/users to see the data
