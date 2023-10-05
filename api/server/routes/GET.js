const app = require("../server")
// import app from "../server"

app.get("/", async (req, res)=>{
    res.json({"hola":"hola"})
})