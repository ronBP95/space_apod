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
app.get('/api/members/:id', (req, res) => {
    const memFilt = members();
    const found = memFilt.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(memFilt.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} was found.`});
    }
    
});

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

// Listen on port
app.listen(port, () => console.log ("listening on port:" + port))
