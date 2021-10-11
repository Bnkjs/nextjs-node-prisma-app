// const express = require('express');
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client')
const allStatus = require('../src/utils/nodeStatuts')

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.json())

app.use('/contacts', require('./routes/allDbContacts'))
app.use('/create_contact', require('./routes/createDbContact'))

const prisma = new PrismaClient()

app.get('/', async (req, res)=>{
 try {
   if(req.body){
    const allContacts = await prisma.contact.findMany()
    console.log('bienvenue sur la méthode GET, voici la req:' + allContacts);
    res.json(allContacts)
   }
 } catch (error) {
   res.status(404)
   res.send("une erreur s'est produite..")
   res.end()
 }

})
app.post('/', async ( req, res)=>{
    try{
      if(req.body.name === allStatus.isUndefined || req.body.name === allStatus.isEmpty || req.body.email === allStatus.isUndefined || req.body.email === allStatus.isEmpty){
        res.status(403)
        console.log( {error: "vous n'avez pas entré d'infos.."})
        res.end()
      } else{
        const saveOneContact = await prisma.contact.create({
          data: req.body
          
        })
        console.log(req.body);

        res.json(saveOneContact)
      }
    } catch(e){
      throw new Error(e)
    } 
})
app.listen(8000, ()=>{
  console.log(' ϟ tibidit ϟ ● 🤖 → Connecté sur le port 8000 📮');
})