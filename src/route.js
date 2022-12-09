const express = require('express');
const router = express.Router()

const cryptocontroller = require("./controller/cryptocontroller")


router.get("/getCoin", cryptocontroller.storeCoin)


module.exports = router;