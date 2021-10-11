// const express = require('express');
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client')


let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.json())

app.use('/contacts', require('./routes/allDbContacts'))
app.use('/create_contact', require('./routes/createDbContact'))

const prisma = new PrismaClient()

app.get('/', (req, res)=>{
  res.send('hello server')
})
app.post('/', async ( req, res)=>{
    if(req.body.name === undefined || req.body.name === "" || req.body.email === undefined || req.body.email === ""){
      res.status(403)
      res.send( {error: "vous n'avez pas entré de message.."})
    } else{
      const saveOneContact = await prisma.contact.create({
        data: req.body
      })
      console.log(req.body);
      res.json(saveOneContact)
    }
   
      
})
app.listen(8000, ()=>{
  console.log(' ϟ tibidit ϟ ● 🤖 → Connecté sur le port 8000 📮');
})