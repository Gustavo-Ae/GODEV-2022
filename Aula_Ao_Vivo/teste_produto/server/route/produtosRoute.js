const express = require("express")

const router = express.Router()

router.get("/produtos", async function(req, res){
    res.send("Methodo GET = route: /produtos")
})

module.exports = router;