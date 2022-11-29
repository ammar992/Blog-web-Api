const Post = require('../model/postSchema');

class postController {
  static createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savePost = await newPost.save();
      res.status(200).json(savePost);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  static updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
      }
  };
}

module.exports = postController;
