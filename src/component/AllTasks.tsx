import React, { useState } from "react";
import '../styles/listItem.css'
interface ListProps {
  deleteList(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ): void;
  isCompleted(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ): void;
  list: Array<{
    id: number;
    value: string;
    isComplete: Boolean;
  }>;
}

const AllTasks: React.FC<ListProps> = (props) => {
  return (
    <div className="taskList">
      {props.list.length > 0 && (
        <ul>
          {props.list.map((task) => {
            return (
              <li>
                {task.value}
                <button
                  className="btn btn-outline-success"
                  onClick={(e) => props.isCompleted(e, task.id)}
                >
                  Complete
              </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => props.deleteList(e, task.id)}
                >
                  Delete
              </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AllTasks;
