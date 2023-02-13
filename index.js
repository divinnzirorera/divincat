const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
var numbers = []
const add = require('./add')
const multiply = require('./multiply')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
  res.render('index.ejs')
});
app.post('/keep',function(req,res){
    var number = req.body.numbers
    numbers.push(number)
    
res.send('number kept')
  
  
});
app.post('/add',function(req,res){
    sum = add(numbers)
    res.send( 'sum is',sum)
})
app.post('/multiply',function(req,res){
    product= multiply(numbers)
    res.send( product)
})


app.listen(5000)
