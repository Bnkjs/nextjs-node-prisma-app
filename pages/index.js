import styles from '../styles/Home.module.css'
import { Card } from '../src/card/card'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from "uuid"
import { Form } from '../src/form/ AddUserContactForm'
export default function Home({contacts}){

  console.log(contacts);
  return (
    <div className={styles.container}>
      <Form method='POST'/>
      {
        contacts.map((c)=>{
          return <Card key={uuidv4()} name={c.name} email={c.email} />
        })
      }
      
    </div>
  )
}

export async function getStaticProps(){
  const res =  await fetch('http://localhost:8000/contacts')
  const contacts = await res.json()
    return {
      props: {contacts}
    }
}