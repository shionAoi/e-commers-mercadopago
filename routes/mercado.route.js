var express = require('express');
var router = express.Router();
var { createPreference } = require('../services/mercado.service');

router.post('/create_preference', async (req, res) => {
    const init_point = await createPreference(req.body);
    res.json({ init_point: init_point });
});

router.post('/notifications', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

module.exports = router;