//*********************************************************************************
// API.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = app => {
    app.get('/api/children/:id', (req, res) => {
        db.Children.findOne({
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data)
        })
    })

    app.get('/api/children', (req, res) => {
        db.Children.findAll({}).then(data => {
            res.json(data)
        })
    })

    // Get a specific child
    app.get("/api/children/CfirstName/:CfirstName", function (req, res) {
        db.Children.findAll({
            where: {
                CfirstName: req.params.CfirstName
            }
        }).then(data => {
            res.json(data)
        })
    })
    // Get all Children of a specific gender
    app.get("/api/children/Cgender/:Cgender", function (req, res) {
        db.Children.findAll({
            where: {
                Cgender: req.params.Cgender
            }
        }).then(data => {
            res.json(data)
        });
    });
    // Get all that are special needs
    app.get("/api/children/Cspnds/:Cspnds", function (req, res) {
        db.Children.findAll({
            where: {
                Cspnds: req.params.Cspnds
            }
        }).then(data => {
            res.json(data)
        });
    });
    // Get all over 5 from Children 
    app.get("/api/children/above", function (req, res) {
        db.Children.findAll({
            where: {
                Cage: {
                    $gt: 5
                }
            },
            order: [["Cage", "DESC"]]
        }).then(data => {
            res.json(data)
        });
    });
    // Get all under 5 from Children
    app.get("/api/children/Cage", function (req, res) {
        db.Children.findAll({
            where: {
                Cage: {
                    $lte: 5
                }
            },
            order: [["Cage", "ASC"]]
        }).then(function (results) {
            res.json(results);
        });
    });
    // Add a Child
    app.post("/api/children/new", function (req, res) {
        console.log("Children Data:");
        console.log(req.body);
        db.Children.create({
            CfirstName: req.body.CfirstName,
            Cimage: req.body.Cimage,
            ClastName: req.body.ClastName,
            Cage: req.body.Cage,
            Cgender: req.body.Cgender,
            Ccity: req.body.Ccity,
            Ccountry: req.body.Ccountry,
            Cspnds: req.body.Cspnds
        }).then(function (results) {
            res.json(results);
        });
    });
    // Delete a Child
    app.delete("/api/children/:id", function (req, res) {
        console.log("Child ID:");
        console.log(req.params.id);
        db.Children.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });
};