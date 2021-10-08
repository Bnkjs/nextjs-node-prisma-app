// const express = require('express');
const express = require('express');
const app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.json())

app.use('/contacts', require('./routes/allDbContacts'))
app.use('/create_contact', require('./routes/createDbContact'))


app.get('/', (req, res)=>{
  res.send('hello server')
})
app.post('/', ( req, res)=>{
    if(req.body.contact === undefined || req.body.contact === ""){
      res.status(403)
      res.send( {error: "vous n'avez pas entré de message.."})
    }
      res.send(req.body.message)
      console.log(req.body)
})
app.listen(8000, ()=>{
  console.log(' ϟ tibidit ϟ ● 🤖 → Connecté sur le port 8000 📮');
})