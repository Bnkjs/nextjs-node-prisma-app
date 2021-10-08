const { PrismaClient } = require('@prisma/client')

var faker = require('faker');


  const prisma = new PrismaClient()

  async function main(){
    let x = 0;
    while(x < 10){
      await prisma.contact.create({
        data:{
          name: faker.internet.userName(),
          email: faker.internet.email(),
          PP: faker.internet.avatar()
        }
      })
      x++;
    }
    
  }

  main().catch(e => {
    console.log(e);
    process.exit(1)
  }).finally(()=>{
    prisma.$disconnect()
  })