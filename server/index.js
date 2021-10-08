// const express = require('express');
const express = require('express');
const app = express();

let bodyParser = require('body-parser')


bodyParser.urlencoded({ extended: false })
bodyParser.json()
app.use(express.json())

app.use('/contacts', require('./routes/contact'))

app.get('/', (req, res)=>{
  res.send('hello server')
})
app.listen(8000, ()=>{
  console.log(' ϟ tibidit ϟ ● 🤖 → Connecté sur le port 8000 📮');
})