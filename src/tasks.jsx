import { useState } from 'react'
import tasks from './data/tasks.js'
import "./tasks.css"

function App() {
    // logica
    let incompleteTask = tasks
        .filter((element) => { return element.state !== "completed" })
        .map((element) => {
            return <li key={element.id}>
                <h4>{element.title} <span>{element.state}</span>
                </h4>
                <p>Priority Level: {element.priority}</p>
                <p>Estimated Time: {element.estimatedTime}</p>
            </li>
        });
    let incompleteCounter = incompleteTask.length;

    // logica
    let completeTask = tasks.filter((element) => { return element.state === "completed" }).map((element) => {
        return <li key={element.id}>
            <h4>{element.title} <span>{element.state}</span></h4>

            <p>Priority Level: {element.priority}</p>
            <p>Estimated Time: {element.estimatedTime}</p>
        </li>
    });
    let completeCounter = completeTask.length;
    ;


    // html
    return (
        <>
            <header>
                <h1>Task Manager</h1>
            </header>
            <main className='content'>
                <h2>Tasks non completate: {incompleteCounter}</h2>
                <ul>{incompleteTask}</ul>
                <hr />
                <h2>Tasks completate: {completeCounter}</h2>
                <ul>{completeTask}</ul>
            </main>
            <footer>
                il piedestante
            </footer>
        </>
    )
}

export default App