const { Comment, User, Post } = require("../../index");

async function CreateComment(obj) {
  const { description, postId, userId } = obj;
  const objValues = { description, postId, userId };

  try {
    if (Object.values(objValues).some((e) => e === undefined)) {
      const missing = Object.keys(objValues)
        .filter((e) => objValues[e] === undefined)
        .join(", ");
      throw new Error(`Missing data (${missing})`);
    }

    const user = await User.findOne({ where: { id: userId } });
    const post = await Post.findOne({ where: { id: postId } });

    const dbModels = { user, post };

    if (Object.values(dbModels).some((e) => e === null)) {
      const missing = Object.keys(dbModels)
        .filter((e) => dbModels[e] === null)
        .join(", ");
      throw new Error(`Couldn't fint data (${missing})`);
    }

    const comment = await Comment.create(obj);

    comment.setUser(user);
    comment.setPost(post);

    return comment;
  } catch (error) {
    throw error;
  }
}

module.exports = CreateComment;
