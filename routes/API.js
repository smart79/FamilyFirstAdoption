//*********************************************************************************
// API.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Child = require("../models/children.js");

// Routes
// =============================================================
module.exports = function (app) {
    // Get all children
    app.get("/api/Children/all", function (req, res) {
        Child.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    // Get a specific child
    app.get("/api/Children/:id", function (req, res) {
        Child.findAll({
            where: {
                title: req.params.Child
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all Children of a specific gender
    app.get("/api/Children/Cgender/:gender", function (req, res) {
        Child.findAll({
            where: {
                gender: req.params.gender
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all that are special needs
    app.get("/api/Children/Cspnds/:Cspnds", function (req, res) {
        Child.findAll({
            where: {
                Cspnds: req.params.Cspnds
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all over 5 from Children 
    app.get("/api/Children/Cage", function (req, res) {
        Child.findAll({
            where: {
                Cage: {
                    $gte: 5
                }
            },
            order: [["Cage", "DESC"]]
        }).then(function (results) {
            res.json(results);
        });
    });

    // Get all under 5 from Children
    app.get("/api/Children/Cage", function (req, res) {
        Child.findAll({
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
    app.post("/api/new", function (req, res) {
        console.log("Children Data:");
        console.log(req.body);
        Child.create({
            CfirstName: req.body.CfirstName,
            Cimage: req.body.Cimage,
            ClastName: req.body.ClastName,
            Cage: req.body.Cage,
            Cgender: req.body.Cgender,
            Ccity: req.body.Ccity,
            Cstate: req.body.Cstate,
            Ccountry: req.body.Ccountry,
            Cspnds: req.body.Cspnds,

        }).then(function (results) {
            res.json(results);
        });
    });

    // Delete a Child
    app.delete("/api/Children/:id", function (req, res) {
        console.log("Child ID:");
        console.log(req.params.id);
        Child.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });
};
