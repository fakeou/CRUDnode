var express = require('express')
var router = express.Router()
var urlmod = require('url')

var sqlserve = require('../pubilic/js/sqlfunction')




router.get('/',async (req,res) => {
  var getquery =  urlmod.parse(req.url,true).query
  
   if(JSON.stringify(getquery) === '{}'){   //转换为json字符串来判断是否为空
    var datasql = await sqlserve("select * from Student");
    }

    res.send(datasql.recordsets)
})

module.exports = router


router.get('/create',async (req,res) => {
    var getquery = urlmod.parse(req.url,true).query //拿到对象
    console.log(getquery.Sno);
    
    await sqlserve(`INSERT INTO Student VALUES ('${getquery.Sno}','${getquery.Sname}','${getquery.Ssex}','${getquery.Sage}','${getquery.Sdept}')`).then((err) => {
        if(err){
            console.log(err);
            
        }
        res.send('请求成功')
    })
    
})

router.get('/delete',async (req,res) => {
    var getquery = urlmod.parse(req.url,true).query
    console.log(getquery.Sno);
    await sqlserve(`delete from Student where Sno = '${getquery.Sno}'`).then((err) => {
        if(err) {
            console.log(err);
            
        }
        res.send()
    })
}) 

router.get('/update',async (req,res) => {
    var getquery = urlmod.parse(req.url,true).query
    console.log(getquery);
    await sqlserve(`update Student set ${getquery.property} = '${getquery.newvalue}' where ${getquery.property} = '${getquery.oldvalue}' `)
    .then((err) => {
        if(err){
            console.log(err);
            
        }
        res.send()
    })
})