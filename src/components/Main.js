import React from "react";
import "../styles/main.scss";
import Drop from './Drop';
import settings from "../img/settings.svg";
import List from "../components/List";
import Todo from "./Todo";

function Main() {

    return(
        <div className="main"> 
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