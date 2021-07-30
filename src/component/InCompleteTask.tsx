import React from 'react'
import '../styles/Navbar.css'
import '../styles/listItem.css'

interface IncompleteTasksProps {
    isCompleted(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: number
    ): void;
    list: Array<
        {
            id: number,
            value: string,
            isComplete: Boolean
        }>
}

const IncompleteTask: React.FC<IncompleteTasksProps> = (props) => {

    return (
        <div className="taskList">
            {props.list.length > 0 && (
                <ul>
                    {props.list.map(task => {
                        return (!task.isComplete &&
                            <li>
                                {task.value}
                                <button
                                    className="btn btn-outline-success"
                                    onClick={(e) => props.isCompleted(e, task.id)}
                                >
                                    Complete
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}

export default IncompleteTask;