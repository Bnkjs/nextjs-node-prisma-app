export const Form = ({ onSubmit }) => {
  const [contactInput, setContactInput] = useState({})

  return (
      <form className="form-post" method={props.method} onSubmit={onSubmit}>
          <input type="text" placeholder="title" name="title" onChange={(e)=>setContactInput({...contactInput, title: e.target.value})}/>
          <input type="text" placeholder="content" name="content" onChange={(e)=>{setContactInput({...contactInput, content: e.target.value})}}/>
          <input type="submit" value="Update"/>
        </form>
  );
}
