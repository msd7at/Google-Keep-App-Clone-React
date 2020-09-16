import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setexpand] = useState(false);
    const [note, SetNote] = useState({
        title: "",
        content: '',
    });

    const InputEvent = (event) => {
        // const value=event.target.value;
        // const name=event.target.name;
        const { name, value } = event.target;
        SetNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    };

    const addEvent = () => {
        props.passNote(note)
        SetNote({
            title: "",
            content: '',
        });

    };
    const expandit = () => {
        setexpand(true);
    }
    const backto = () => {
        setexpand(false);
    }

    return (
        <>
            <div className="main_note" onDoubleClick={backto}>
                <form>
                    {expand ?
                        <input type="text" name="title" value={note.title}
                            onChange={InputEvent} placeholder="Title" autoComplete="off" />
                        : null}
                    <textarea rows="" column=" " name="content" placeholder="Write a note..."
                        value={note.content} onChange={InputEvent} onClick={expandit}>
                    </textarea>
                    {expand ?
                        <Button onClick={addEvent}>
                            <AddIcon className="plus_sign" />
                        </Button> : null}
                </form>
            </div>

        </>
    )


}
export default CreateNote;