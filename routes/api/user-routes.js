const router = require("express").Router();
const {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);

// set up POST and DELETE at /api/:id/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
