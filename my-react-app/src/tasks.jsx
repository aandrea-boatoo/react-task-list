import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tasks from './data/tasks.js'

function tasks() {
    // logica
    let incompleteTask = tasks.filter((state) => { tasks.state !== completed }).map((title, priority, time) => { title, priority, time: tasks.estimatedTime })

    // html

    return (incompleteTask)
}
