import Express from "express";
import path from "path"
import { fileURLToPath } from "url";
import members from "./Members.js"
import dayjs from "dayjs"

const app = Express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')}`);
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

// Get Single Member
// Note: There is an issue with the path. Postman requires a ":" in front of the id number in order for the route to get hit
// Ex. /api/members/:1 and this is likely due to the way the object is stored inside of a function in members.js. Will table for later.
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id === + parseInt(req.params.id)));
});

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

// Listen on port
app.listen(port, () => console.log ("listening on port:" + port))
