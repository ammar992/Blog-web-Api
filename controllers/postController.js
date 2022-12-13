const Post = require('../model/postSchema');

class postController {



  //// create post

  static createPost = async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const savePost = await newPost.save();
      res.status(200).json(savePost);
    } catch (error) {
      res.status(500).json(error);
    }
  };


  //// update post

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


  //// delete 

  static deletePost = async (req,res)=>{
    try {
      const post = await Post.findById(req.params.id);
      if(post.username === req.body.username){
        try {
          await post.delete();
          res.status(200).json("Post has been deleted");
        } catch (error) {
          res.status(500).json(error)
        }
      }
      else{
        res.status(401).json("You can update only your account");
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

////////    get post 


  static getPost = async (req,res)=>{
   try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
   } catch (error) {
    res.status(500).json(error)
   }
  }

  
  ////////   Get all post 

  static getAllPost = async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let post;
      if(username){
        post = await Post.find({username})
      }
      else if(catName){
        post = await Post.find({
          catogories:{
            $in:[catName]
          }
        })
      }
      else{
        post = await Post.find();
      }
      res.status(200).json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  

  }

}

module.exports = postController;
