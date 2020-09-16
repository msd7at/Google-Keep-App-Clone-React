import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNode";
import Note from "./Note";

const App = () => {
    const [addItem,setadditem]=useState([]);
    const addNote =(note)=>{
        setadditem((prevData)=>{
            return(
                [...prevData,note]
            )
        })
        
    };
    const onDelete=(id)=>{
        setadditem((oldData)=>
            oldData.filter((currdata,indx)=>{
                return indx !== id;
            })
        );

    };

return(
    <>
     
        <Header/>
        <CreateNote
            passNote={addNote}
        />
        
        {addItem.map((val,index)=>{
            return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
            />
            
        })}
        <Footer/>
    </>
);
    
    
}
export default App;