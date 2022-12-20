import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';

const CreateTextArea = ({addnote})=>{

    const [expand, setexpand] = useState(false);
const [note, setnote] = useState({
    title:"",
    content:""
});

const changehandler = (event)=>{
    setnote({
        ...note, [event.target.name]:event.target.value
    })
}

const submithandler = (event)=>{
    event.preventDefault();
if(!note.title && !note.content){alert("Note is empty")}
else{
  addnote(note);
  
  setnote({
    title:"",
    content:""
  })}
}
    const expandhandler= ()=>{
        setexpand(true);
    }
    return(<>
    
    <form onSubmit={submithandler}>
    {expand && (
        <input type="text" placeholder="Title" name="title" value={note.title} onChange={changehandler} />)}
        
        <p><textarea onClick={expandhandler}placeholder="Take a note..." name="content" value={note.content} onChange={changehandler}></textarea></p>
 <button><AddIcon/></button>
        </form>
    </>)
}
export default CreateTextArea;