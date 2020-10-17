import React, { useState } from 'react'

const AddItem = (props) => {

    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [date, setDate] = useState(null);

    const onClickHandle = () => {
        props.setIsAddNew(!props.isAddNew);

    }
    
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const onChangeContent = (event) => {
        setContent(event.target.value);
    }
    const onChangeDate = (event) => {
        setDate(event.target.value);
    }

    const onSubmitHandle = () => {
        props.setIsAddNew(!props.isAddNew);
        console.log(props.length);
        props.onCreatTask({
            id: props.length + 1,
            title,
            content,
            date,
        });
        
    }
    const NewTask = <div>
        <input 
            type = "text" 
            onChange = {onChangeTitle}
            placeholder="title..."
        />
        <input 
            type = "text" 
            onChange = {onChangeContent}
            placeholder="content..."
        />
        <input 
            type = "text" 
            onChange = {onChangeDate}
            placeholder="date..."
        />
        <button type="submit" onClick = {onSubmitHandle}>Add</button>
        </div>
    return(
        <div className="addItem">
            {props.isAddNew ? NewTask : "now" }
            {!props.isAddNew && <button onClick = {onClickHandle}>New...</button>}

        </div>
    );
}

export default AddItem