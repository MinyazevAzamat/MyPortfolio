import React, {useState} from "react";
import "../styles-dark/todo-dark.scss";

function Todo() {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todo !== ''){
            setTodos([...todos, todo]);
            setTodo('');
        }     
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos) 
    };

    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value]
        }
        else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    
    const isChecked = (item) => 
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

    return(
        <div className="input-wrapper-dark">
            <div className="input-wrapper_content">
                <div className="input_button">
                    <input type='text' name="todo" placeholder="Создайте задачу" value={todo}
                    onChange={(e) => {setTodo(e.target.value);
                    }}
                    />
                    <button className="add-button" onClick={addTodo}>Добавить</button>
                </div>
                {todos?.length > 0 ? (
                    <ul className="todo-list">
                    {todos.map((todo, index) => (
                        <div className="todo_logic">
                            <label className="toggle-control">
                                <input type="checkbox" value={todo} onChange = {handleCheck}/>
                                <span className="control"></span>
                            </label>
                            <li key={index} className={isChecked(todo)}>{todo}</li>
                            <button className="delet-btton" onClick={() => {deleteTodo(todo)}}>Удалить</button>
                        </div>
                    ))} 
                </ul> 
                ) : (
                    <div className="empty">
                        <p>Задач нет!</p>
                    </div>
                )}
            
            </div>   
        </div>


    )
}

export default Todo;