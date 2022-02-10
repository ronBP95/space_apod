import Express from "express";
import path from "path"
import { fileURLToPath } from "url";
import members from "./Members.js"
import moment from "moment"

const app = Express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format}`);
    next();
}

// Init Middleware
app.use(logger);

// GET, PUT, POST, DELETE
// ROUTES

// Gets All Members
app.get ('/api/members', (req, res) => {
    res.json(members());
})

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

// Listen on port
app.listen(port, () => console.log ("listening on port:" + port))
