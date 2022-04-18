const express = require("express")
const req = require("express/lib/request")
const json = require("express/lib/response")
const res = require("express/lib/response")
const fs = require("fs")
const fetch = require("node-fetch")
const path = require("path")


const app = express()

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get("/",(req,res) => {
    res.sendfile(path.join(__dirname, 'view/index.html'))
});

app.get("/performance",(req,res) => {
    res.sendfile(path.join(__dirname, 'view/FH4-1440p.png'))
});

app.get("/game_footage", (req, res) => {
    fetch('https://forza-api.tk/')
    .then(resp=>resp.json())
    .then(json=>
        res.send(`<img src="${json.image}" alt="Picture" width="900">`)
    )
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})