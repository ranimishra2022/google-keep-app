import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({title, content, deletehandler})=>{

    return (<>
    <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={deletehandler}><DeleteIcon/></button>
    </div>
    </>)
}
export default Note;