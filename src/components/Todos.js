import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('');
    return (
        <div className = "YOLO">
            <h1> My To-Do List</h1>
            <div className="Zay input-group mb-3">
                <input type="text" className="form-control" name={inputValue} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter New To-Do" aria-label="Enter New To-Do" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="Abigail btn btn-secondary" type="button" onClick={() => {
                        setTodos(prevTodos => [
                            ...prevTodos, inputValue
                        ])
                        setInputValue('')
                    }
                    }
                    > Add</button>
                </div>
            </div>
            {
                todos.map((value, index) => {
                    console.log(value, index);
                })
            }
        </div>
    )
}

export default Todos;