import react,{useState} from 'react'

export const Form = ({ onSubmit, method, onChangeName, onChangemail, onChangePP }) => {
  
  return (
      <form className="form-post" method={method} onSubmit={onSubmit}>
         <input type="text" placeholder="nom du contact" name="name" onChange={onChangeName}/>
         <input type="email" placeholder="email du contact"  name="email" onChange={onChangemail}/>
         <input type="text" placeholder="PP"  name="email" onChange={onChangePP}/>

         <input type="submit" value="Créer contact"/>
      </form>
  );
}
