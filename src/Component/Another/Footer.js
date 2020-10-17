import React, {memo} from 'react'

const Footer = memo(props => {
    const { status, setStatusFilter, clearCompleted } = props
    const filterBtns = [
        {
        title: 'All',
        isActive: status === 'ALL',
        onClick: () => setStatusFilter('ALL'),
        link: ''
        },
        {
        title: 'Active',
        isActive: status === 'ACTIVE',
        onClick: () => setStatusFilter('ACTIVE'),
        link: 'active'
        },
        {
        title: 'Completed',
        isActive: status === 'COMPLETED',
        onClick: () => setStatusFilter('COMPLETED'),
        link: 'complete'
        },

    ]
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{props.numOfTodosLeft}</strong>
                <span> </span>
                <span>{props.numOfTodosLeft <= 1 ? 'item ': 'items '}</span>
                <span>left</span>
            </span>

            <ul className="filters">
                {
                    filterBtns.map(btn => (
                        <FilterBtn 
                            key = {`btn${btn.title}`}
                            {...btn}
                        />
                    ))
                }

            </ul>

            { props.numOfTodos > props.numOfTodosLeft 
                && <button 
                    className="clear-completed" 
                    onClick={clearCompleted}
                >
                    Clear completed
                </button>
            }
        </footer>
    )
})

const FilterBtn = memo(props => {
    const { title, onClick, link, isActive} = props
    return(
        <>
            <li>
                <a
                    href={`#/${link}`}
                    className={isActive ? 'selected' : ''}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
            <span></span>
        </>
    )
})

export default Footer