const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { contact } = new PrismaClient()

router.get('/', async (req,res)=>{
  const allContacts = await contact.findMany()
  res.json(allContacts)
})

module.exports = router;