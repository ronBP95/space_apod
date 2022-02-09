import Express from "express";

const app = Express();
const port = 3000;

const routeName = { loginRoute: '/',
                    dashboardRoute: '/member/dashboard'

                  };
// GET, PUT, POST, DELETE

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => console.log ("listening on port:" + port))
