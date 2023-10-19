const { connectToDB } = require("../../index");
const { Post, User } = require("../../index");

async function CreatePost(obj) {
  const { description, postType, link, userId } = obj;
  const objValues = { description, postType, link, userId };

  try {
    if (Object.values(objValues).some((e) => e === undefined)) {
      const missing = Object.keys(objValues)
        .filter((e) => objValues[e] === undefined)
        .join(", ");
      throw new Error(`Missing data (${missing})`);
    }

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found");
    }

    const post = await Post.create({ description, postType, link, userId });

    post.setUser(user);

    return post;
  } catch (error) {
    throw error;
  }
}

module.exports = CreatePost;
