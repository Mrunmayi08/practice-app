import React from 'react'
import '../styles/Navbar.css'
import '../styles/listItem.css'

interface CompleteTasksProps {
    list: Array<{
        id: number,
        value: string,
        isComplete: Boolean
    }>
}

const CompleteTask: React.FC<CompleteTasksProps> = (props) => {

    return (
        <div className="taskList">
            {props.list.length > 0 && (
                <ul>
                    {props.list.map(task => { return task.isComplete && <li>{task.value}</li> })}
                </ul>
            )}
        </div>
    )
}

export default CompleteTask;