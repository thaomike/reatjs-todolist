import React, {memo} from 'react'
import Todo from './Todo'

const TodoList = memo(props => {
    const { todosList, isCheckedAll, checkAllTodos } = props
    return(
        <section className="main">
            <input readOnly
                className="toggle-all"
                type = 'checkbox'
                checked = {isCheckedAll}
            />
            <label 
                htmlFor="toggle-all"
                onClick = {checkAllTodos}
            ></label>
            <ul className="todo-list">
                {
                    todosList.map((todo, index) => (
                        <Todo 
                            key = {`todo${todo.id}`} 
                            {...{todo}}
                            {...props}
                            index = {index}
                        />
                    ))
                }
            </ul>
        </section>
    )
})

export default TodoList