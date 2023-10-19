const { Post, User, Comment, Like } = require("../../index");

async function FindAllPosts() {
  try {
    const posts = await Post.findAll({
      include: [User, Comment, Like],
    });

    if(!!!posts.length){
      throw new Error("There's no posts in db")
    }
    return posts;
  } catch (error) {
    throw error;
  }
}
module.exports = FindAllPosts;
