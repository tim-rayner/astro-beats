/**
 * @tutorial
 * While we could connect to a database (for more information on this, check the Express documentation,
 * we’re going to keep this simple by using a local file for storing user data. To do this, we must first
 * create the Users.js file.
 */

/**
 * @tutorial
 * we need to create the actual data structure which can be used by other systems. To do this, set the data
 * structure using the following code:
 */

const users = [
  {
    id: 1,
    name: "ExampleUser",
    email: "exampleuser@website.com",
  },
];

/**
 * @tutorial
 * With this structure in place, we can add a module export at the end to allow other project files to use
 * this structure. To do this, append the following code to users.js:
 */

export default users;
