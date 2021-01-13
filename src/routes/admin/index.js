// const express = require('express');
import express from 'express';

const router = express.Router();
// const ctrl = require('./admin.ctrl');
import { get_pong } from './admin.ctrl.js';

//    /admin
router.get('/', (req, res) => {
    res.send('admin page');
});

//    /admin/ping
router.get('/ping', get_pong);

export default router;