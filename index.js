import Express from "express";
import path from "path"
import { fileURLToPath } from "url";
import dayjs from "dayjs"
import router from "./routes/api/members.js";

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

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/', router)
app.use('/:id', router)

// Listen on port
app.listen(port, () => console.log ("listening on port:" + port))
