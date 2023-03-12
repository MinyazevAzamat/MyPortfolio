import React from "react";
import "../styles-dark/main-dark.scss";
import Drop from './Drop-dark';
import settings from "../img/settings-dark.svg";
import List from "../components-dark/List-dark";
import Todo from "./Todo-dark";

function Main() {

    return(
        <div className="main-dark"> 
            <div className="todo">
               <header>
                    <h1>To Do</h1>
                    <button><img src={settings}/></button>
               </header>

               <div className="today">
                    <input type="checkbox"/>
                    <p>Today Tasks: </p>
               </div>
               <div className="todo_content">
                    <Todo/>
               </div>
               <div className="main_tasks">
                    <div>
                        <Drop/>
                    </div>
               </div>
               <div className="next-tasks">
                <div className="example">
                    <List/>
                </div>
               </div>
            </div>          
        </div>
    )
}

export default Main;