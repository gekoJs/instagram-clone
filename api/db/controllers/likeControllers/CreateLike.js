const { Post, User, Like } = require("../../index");

async function CreateLike(obj) {
  const { userId, postId } = obj;
  const objValues = { userId, postId };

  try {
    if (Object.values(objValues).some((e) => e === undefined)) {
      const missing = Object.keys(objValues)
        .filter((e) => objValues[e] === undefined)
        .join(", ");

      throw new Error(`Missing data (${missing}})`);
    }

    const post = await Post.findByPk(postId);
    const user = await User.findByPk(userId);

    const values = {
      post,
      user,
    };

    if (Object.values(values).some((e) => e === null)) {
      const missing = Object.keys(values)
        .filter((e) => values[e] === null)
        .join(", ");

      throw new Error(`Couldn't find any (${missing})`);
    }

    const isLike = await Like.findOne({
      where: { PostId: postId, UserId: userId },
    });

    let like;

    if (isLike) {
      await isLike.destroy();
    } else {
      like = await Like.create({ userId, postId });
      like.setUser(user);
      like.setPost(post);
    }

    return like;
  } catch (error) {
    throw error;
  }
}

module.exports = CreateLike;
