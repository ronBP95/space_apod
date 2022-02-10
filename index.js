import Express from "express";
import path from "path"
import { fileURLToPath } from "url";

const app = Express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

// GET, PUT, POST, DELETE

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

// Listen on port
app.listen(port, () => console.log ("listening on port:" + port))
