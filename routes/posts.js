const router = require("express").Router();
const Post = require("../models/Post");

// create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    await newPost.save();
    return res.status(200).json({ message: "Post created successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // no post found
    if (!post) return res.status(404).json({ message: "No post found" });

    // update the post
    await post.updateOne({ $set: req.body });
    return res.status(200).json({ message: "Post updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    await post.deleteOne();
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// like a post
router.post("/", (req, res) => {
  res.send("done");
});

// get a post
router.get("/", (req, res) => {
  res.send("done");
});

// get all posts
router.get("/all-posts", (req, res) => {
  res.send("done");
});

module.exports = router;