const router = require("express").Router();
const {
  getAllUsers,
  getUserByID,
  createUser,
} = require("../../controllers/user-controller");

// set up GET all and Post at /api/users
router.route("/").get(getAllUsers).post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);

module.exports = router;
