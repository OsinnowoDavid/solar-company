const express = require ('express')
const db = require ('./database/database');

const app=express()


app.use(express.urlencoded({extended: true }));
app.use(express.static('style'));

app.get('/', function (res,req){
    res.setEncoding('/index')
});

app.use(function (res,req){
    res.get('/index') 
        })

    app.use(function (res,req){
res.post('/index') 
    })

    app.listen(3000)




db.connecttodatabase().then(function (){
 

})



 

