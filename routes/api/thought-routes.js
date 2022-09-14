const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// set up GET all route
router.route("/").get(getAllThoughts);

router.route("/:userId").post(createThought);

// POST, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// POST at /api/thoughts/thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
