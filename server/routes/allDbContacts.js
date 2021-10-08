const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { contact } = new PrismaClient()

router.get('/', async (req,res)=>{
  const allContacts = await contact.findMany()
  console.log(allContacts)
  res.json(allContacts)
})

module.exports = router;