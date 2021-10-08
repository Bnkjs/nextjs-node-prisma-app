import styles from '../styles/Home.module.css'
import { Card } from '../src/components/card/card'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from "uuid"
import react,{useState, useEffect} from 'react'
import { SaveOneContact, UrlFetch } from '../src/utils/FormContactFunction'
import { Form } from '../src/components/form/AddUserContactForm'
export default function Home({contacts}){
  const [savedContactData, setSavedContactData] = useState({})
  const [contactInput, setContactInput] = useState({})

 console.log(contactInput);

  async function saveOneContact (e){
    e.preventDefault()
    let myHeaders = new Headers();
    const response = await fetch(`${UrlFetch}`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactInput)
    })
    return await response.json()
  }

  return (
    <div className={styles.container}>
      <Form 
      method='POST' 
      onSubmit={saveOneContact}
      onChangeName={(e)=>{setContactInput({...contactInput, name: e.target.value})}}
      onChangemail={(e)=>{setContactInput({...contactInput, email: e.target.value})}}
      onChangePP={(e)=>{setContactInput({...contactInput, PP: e.target.value})}}
      />
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