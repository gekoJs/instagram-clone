const { connectToDB } = require("..");

async function CreatePost({}) {
  try {
    await connectToDB();

  } catch (error) {
    return error;
  }
}
