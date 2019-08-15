var db = require("../models");
// Routes
// =============================================================
module.exports = app => {
    app.post('/api/sponsor', (req, res) => {
        console.log("Sponsor Data:");
        console.log(req.body);
        db.Sponsor.create(req.body).then(data => {
            res.json(data)
        })
    })
    app.get('/api/sponsor/available', (req, res) => {
        db.Sponsor.findAll({}).then(data => {
            res.json(data)
        })
    })
}



