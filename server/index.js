const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.send('hello server')
})
app.listen(8000, ()=>{
  console.log('🤖  → Connecté sur le port 8000 📮');
})