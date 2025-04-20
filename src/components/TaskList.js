import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              text={task.text}
              category={task.category}
              onTaskDelete={() => onTaskDelete(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;