import React, { useState } from 'react'
import ListGroup from './ListGroup';

function TodoList() {
    const [inputValue, setInputValue] = useState("");
    const [tareas, setTareas] = useState([]);
    //inputValue = "Dormir"
    //tareas = ["Hacer la cama", "Comer"]
    //Manera 1:
    //tareas.push("inputValue");
    //tarea = ["Hacer la cama", "Comer", "Dormir"];
    //Manera 2:
    //Spread operator ...
    //setTareas([...tareas, inputValue]);
    //tarea = ["Hacer la cama", "Comer", "Dormir"];
    function handleClick() {
        if (inputValue.trim() !== '') {
          setTareas([...tareas, inputValue]);
          setInputValue('');
        }
    }

    function handleDelete(index) {
        //tareas = ["Hacer la cama", "Comer", "Dormir"];
        const newTareas = [...tareas];
        newTareas.splice(index, 1);
        //newTareas = ["Hacer la cama", "Dormir"];
        setTareas(newTareas);
        //tareas = ["Hacer la cama", "Dormir"];
    }


  return (
        <div className="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-4 mt-5">
                    <label for="tarea">Tareas:</label>
                    <div class="d-flex justify-content-inline">
                        <input type="text" class="form-control mt-2" id="tarea" placeholder='Tu tarea aqui' onChange={ (event) => setInputValue(event.target.value) } />
                        <button type="submit" class="btn btn-dark mt-2" onClick={ () => handleClick(inputValue)}>Go</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-4 mt-5">
                    <ListGroup taskList={tareas} onDelete={handleDelete} />
                </div>
            </div>
        </div>
  )
}

export default TodoList