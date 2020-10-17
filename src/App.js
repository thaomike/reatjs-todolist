import React from 'react';
import Header from './Component/Another/Header';
import TodoList from './Component/Another/TodoList';
import Footer from './Component/Another/Footer'
import './Styles/TaskList.css'

const isNotCheckedAll = (todos = []) => todos.find(todo => !todo.isCompleted)

const filterByStatus = (todos = [], status = '', id = '') => {
    switch(status)
    {
        case 'ACTIVE':
            return todos.filter(todo => !todo.isCompleted)
        case 'COMPLETED':
            return todos.filter(todo => todo.isCompleted)
        case 'REMOVE':
            return todos.filter(todo => todo.id !== id)
        default:
            return todos
    }
} 

// const sortByText = (todos = []) => {
//     return todos.sort((a,b) => {
//         if(a.text < b.text) return -1;
//         if(a.text === b.text) return 0;
//         return 1;
//     })
// }
class App extends React.PureComponent {
    state = {
        todosList: [
        {
            id: 1,
            text:'todo 1',
            isCompleted: true,
        },
        {
            id: 2,
            text:'todo 2',
            isCompleted: false,
        }],
        todoEditingId: '',
        isCheckedAll: false,
        status: 'ALL',
        sort: false
    }

    componentWillMount() {
        this.setState({
            isCheckedAll : !isNotCheckedAll(this.state.todosList)
        })
    }

    addTodo = (todo = {}) => {
        // console.log('todo',todo);
        this.setState(preState => (
            {todosList: [...preState.todosList, todo]}
        )) 
    }

    getTodoEditingId = (id = '') => {
        this.setState({todoEditingId : id})
    }

    editTodo = (todo = {}, index = -1) => {
        if(index >= 0)
        {
            const { todosList : list} = this.state
            list.splice(index, 1, todo)
            this.setState({ 
                            todosList : list,
                            todoEditingId: ''
                        })
        }
    }

    markCompleted = (id = '') => {
        const {todosList} = this.state
        const updatedList = todosList.map(todo => todo.id === id ? ({ ...todo, isCompleted : !todo.isCompleted}) : todo)
        this.setState(preState => ({
            todosList: updatedList,
            isCheckedAll: !isNotCheckedAll(updatedList)

        }))
    }

    checkAllTodos = () => {
        const { todosList } = this.state
        this.setState(preState => ({
            todosList: todosList.map(todo => ({...todo, isCompleted: !preState.isCheckedAll})),
            isCheckedAll: !preState.isCheckedAll
        }))
    }

    setStatusFilter = (status = '') => {
        this.setState({
            status
        })
    }

    clearCompleted = () => {
        const { todosList } = this.state
        this.setState({
            todosList: filterByStatus(todosList, 'ACTIVE')
        })
    }

    onRemove = (id = '') => {
        const { todosList } = this.state
        this.setState({
            todosList: filterByStatus(todosList, 'REMOVE', id)
        })
    }

    render() {
        const { 
                todosList, 
                todoEditingId, 
                isCheckedAll, 
                status } = this.state
        return (
            <div className="todoapp">
                <Header
                    addTodo = {this.addTodo}
                />
                <TodoList 
                    todosList = {filterByStatus(todosList, status)}
                    getTodoEditingId = {this.getTodoEditingId}
                    todoEditingId = {todoEditingId}
                    editTodo = {this.editTodo}
                    markCompleted = {this.markCompleted}
                    isCheckedAll = {isCheckedAll}
                    checkAllTodos = {this.checkAllTodos}
                    removeTodo = {this.onRemove}
                />
                <Footer
                    setStatusFilter = {this.setStatusFilter}
                    status = {status}
                    clearCompleted = {this.clearCompleted}
                    numOfTodos = {todosList.length}
                    numOfTodosLeft = {filterByStatus(todosList,"ACTIVE").length}
                />
    
                {/* <TaskList/> */}
            </div>
        );
    }
    
}

export default App;
