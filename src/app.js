const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const router = require('./routes');

class App {
    constructor () {
        this.app = express();

        //미들웨어 세팅
        this.setMiddleWare();

        //정적 디렉토리 추가
        this.setStatic();

        //로컬 변수
        this.setLocals();

        //라우팅
        this.getRouting();

        //404 페이지
        this.status404();

        //error
        this.errorHandler();


    }

    setMiddleWare () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    setStatic () {
        this.app.use('/uploads', express.static('uploads'));
    }

    setLocals () {

    }

    getRouting () {
        this.app.get('/', (req, res) => {
            res.send('hello');
        })
        this.app.use(router);
    }

    status404 () {

    }

    errorHandler () {
        this.app.use((err, req, res, next) => {

        })
    }
}

module.exports = new App().app;
