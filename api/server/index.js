const app = require("./app");
const { connectToDB } = require("../db/index");
const PORT = 3001;

app.listen(PORT, async () => {
  await connectToDB()
  console.log(`Listening on port ${PORT}`);
});
