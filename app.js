const express = require('express')
const app = express()
const port = 3000
var router = require('./router.js/index')

var sqlcrud = require('./pubilic/js/sqlfunction')

app.all('*', (req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200); 
    } else { 
        next(); 
    }
})

app.use(router)

app.listen(3000, () => {
    console.log('running 3000------');
    
})



