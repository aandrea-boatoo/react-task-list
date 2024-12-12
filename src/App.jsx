import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tasks from "./data/tasks.js"


function App() {
  function tasksUncompleted() {
    // logica
    let incompleteTask = tasks
      .filter((task) => { task.state !== "completed" })
      .map((task) => <li key={task.id}>{task.title}</li>);
    return (incompleteTask)
  }

  function tasksCompleted() {
    // logica
    let completeTask = tasks.filter((task) => { task.state === "completed" }).map((task) => <li key={task.id}>{task.title}</li>);
    return (completeTask)
  }

  function tasksUncompleted() {
    // logica
    let incompleteTask = tasks
      .filter((task) => { task.state !== "completed" })
      .map((task) => <li key={task.id}>{task.title}</li>);
    return (incompleteTask)
  }
  function tasksCompleted() {
    // logica
    let completeTask = tasks.filter((task) => { task.state === "completed" }).map((task) => <li key={task.id}>{task.title}</li>);
    return (completeTask)
  }
}

export default App
