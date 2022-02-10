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