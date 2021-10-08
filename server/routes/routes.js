const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { contact } = new PrismaClient()

router.get('/', (req,res)=>{
  
})
