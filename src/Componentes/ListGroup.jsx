import React from 'react'
//taskList = ["Hacer la cama", "Comer", "Dormir"];
function ListGroup({ taskList, onDelete }) {
  return (
    <ul className="list-group">
      {taskList.map((task, index) => (
        <li className="list-group-item" key={index}>
          {task}
          <button
            className="btn btn-danger btn-sm float-end"
            onClick={() => onDelete(index)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListGroup