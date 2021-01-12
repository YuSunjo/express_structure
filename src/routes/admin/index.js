const express = require('express');

const router = express.Router();
const ctrl = require('./admin.ctrl');

//    /admin
router.get('/', (req, res) => {
    res.send('admin page');
});

//    /admin/ping
router.get('/ping', ctrl.get_pong);

module.exports = router;