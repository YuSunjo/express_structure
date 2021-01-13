//routes
// const express = require('express');
import express from 'express';
// const admin = require('./admin');
import admin from './admin/index.js';

const router = express.Router();

router.use('/admin', admin);

export default router;