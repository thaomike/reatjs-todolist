import React, { useState } from 'react'
import Menu from './Menu'
import {Item} from './Item'
import Header from './Another/Header';
import '../Styles/TaskList.css'

export const TaskList = () => {
    const [isAddNew, setIsAddNew] = useState(false);
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: 'TITLE',
            content: 'CONTENT',
            date: 'DATE',
        },
        {
            id: 2,
            title: 'done this app 2',
            content: 'keep doing it',
            date: 'now',
        }
    ]);

    const onCreatTask = (task) => {
        setTaskList([...taskList, task]);
    }

    return(
        <div className = "todoapp">
            <Header></Header>
            <Menu 
                isAddNew = {isAddNew}
                setIsAddNew = {setIsAddNew}
                onCreatTask = {onCreatTask}
                length = {taskList.length}
            />
            {taskList.map((task) => (
                <Item key = {task.id}
                    id = {task.id}
                    title = {task.title}
                    content = {task.content}
                    date = {task.date}
                />
            ))}
        </div>
    )
} 