import React, {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2.30pm',
            reminder: true,
        },
        {
            id:2,
            text: 'Meeting at school',
            day: 'Feb 6th at 2.30pm',
            reminder: true,
        },
        {
            id:3,
            text: 'Food shopping',
            day: 'Feb 5th at 2.30pm',
            reminder: false,
        }
    ])

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // toggle reminder
    const toggleReminder = (id) =>{
        console.log(id)
    }

    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        </div>
    )
}

export default App
