import React, {useState} from 'react';
import './Style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateTextArea from './components/CreateTextArea';
import Note from './components/Note';
import Countnote from './components/Countnote';

function App() {

  const [note, setnote] = useState([]);
   const addnote = (newnote)=>{
    setnote([...note, newnote]);
   }
  const deletehandler=(index)=>{
    note.splice(index, 1);
    setnote([...note]);
  }
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-1"></div> */}
        <div className="col-12">
          
    <Header count={note.length}/>
    <Countnote count = {note.length}/>
    <CreateTextArea addnote={addnote}/>
    
    {note.map((item, index)=>{
      return( <Note key = {index} id={index} title={item.title} content={item.content} deletehandler={(index)=>{deletehandler(index)}}/>)
    })}
   
    {/* <Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/> */}
    <Footer/>
    </div>
    {/* <div className="col-1"></div> */}
    </div>
    </div>
    </>
  );
}

export default App;
