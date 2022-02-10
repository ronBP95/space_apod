import Express from "express";
import Space from "./space.js";

const app = Express();
const port = 3000;

// GET, PUT, POST, DELETE


// Index Route
app.get("/", (req, res) => {
    res.send("Hello World");
})

// Listen on port
app.listen(port, () => console.log ("listening on port:" + port))
