const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const bodyParser = require('body-parser')
const { contact } = new PrismaClient()

// router.use(bodyParser.urlencoded({ extended: false }))
// router.use(bodyParser.json())


router.get('/', async (req,res)=>{
  console.log(req.body);
  // const allContacts = await contact.create({
  // })
})

module.exports = router;