/**
 * @tutorial
 * In this file, we need to create some logical routes. To start, again state that we require Express:
 */

const express = require("express");

//define router
const router = express.Router();

/**
 * @tutorial
 * In order to make sure our data routing is clear and pulls in data in a structured way, we’re going to
 * need a way to generate unique IDs for each user entity.
 */

const uuid = require("uuid");

/**
 * @tutorial
 * Next, we need to set the path for the API so that our user system can handle this data correctly.
 * We can use the following code to do so:
 */

let users = require("../../Users.js");

/**
 * @tutorial
 * Now we can finally create our first endpoint. We’ll create a GET function to retrieve all user data.
 * We can do this using this code:
 */

router.get("/", (req, res) => {
  res.json(users);
  return res;
});

/**
 * @tutorial
 * To get a specific ID, we need to provide a way for the client to pass a user ID and check against the internal data store.
 * We can use the following code to do so:
 */

router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

//CRUD Functions
//CREATE
router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };

  if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }
  users.push(newUser);
  res.json(users);
});

//UPDATE
router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    const updateUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updateUser.name ? updateUser.name : user.name;
        user.email = updateUser.email ? updateUser.email : user.email;
        res.json({ msg: "User updated", user });
      }
    });
  } else {
    res.sendStatus(400);
  }
});

//DELETE
router.delete("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    users = users.filter((user) => user.id !== parseInt(req.params.id));
    res.json({
      msg: "User deleted",
      users,
    });
  } else {
    res.sendStatus(400);
  }
});
/**
 * @tutorial
 * With this route created, we can now export this for use by the API using the following code:
 */

module.exports = router;
