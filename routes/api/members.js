import express from 'express';
import members from "../../Members.js"
const router = express.Router();

// Gets All Members
router.get ('/api/members', (req, res) => {
    res.json(members);
})

// Get Single Member
router.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id} was found.`});
    } 
});

// Create Member
router.post('/'), (req, res) => {
    res.send(req.body);
};

export default router;