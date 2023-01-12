// Import Dependencies
const express = require("express")
const cors = require("cors")

// Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

// Create App object
const app = express()

// set up middleware
app.use(cors())

// home route for testing
app.get("/projects", (req, res) => {
    // send the projects json
    res.json(projects)
})

// route for retrieving about
app.get("/about", (req, res) => {
    // send about info json
    res.json(about)
})

// declare variable for port
const PORT = process.env.PORT || 4000

// server listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))