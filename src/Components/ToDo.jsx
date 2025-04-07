import {useState} from 'react'

export default function ToDo(){

    const [tasks, setTasks] = useState ([]);

    console.log(tasks)

    const handleTextInput = (index, newValue) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = newValue;
        setTasks(updatedTasks);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Escape' || e.key === 'Enter'){
            e.target.blur()
        }
    }

    const handleTaskAdd = () => {
        const Input = document.getElementById('taskInput')
        if (Input.value != ""){
            let newTasks = [...tasks, Input.value]
            setTasks(newTasks)
            Input.value = ''
        } else {
            document.getElementById('emptyTaskMessage').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('emptyTaskMessage').classList.add('hidden')
            }, 3000);
        }
        
    }

    return(
        <>
            <h2 id='emptyTaskMessage' className='mb-12 text-3xl hidden'>Add a new task</h2>
            <div className='flex justify-between mb-6'>
                <input id='taskInput' type="text" className='bg-gray-300 text-black p-3 text-xl rounded-sm'/>
                <div>
                    <button className='bg-gray-200 text-black p-3 text-xl rounded-lg' onClick={()=>handleTaskAdd(tasks)}>Add Task</button>
                    <button className='bg-gray-200 text-black p-3 text-xl rounded-lg' onClick={()=>handleTaskAdd(tasks)}>Add Task</button>
                </div>
            </div>
            <ol className='flex flex-col'>
                {tasks.map((tasks, index) =>
                    
                    
                    <label key={index} htmlFor="" className='text-3xl flex items-center mb-4'>
                        <input id={index} type="checkbox" defaultChecked={false} className='w-10 h-10 mr-4'/>
                        <input 
                            id= {`text ${index}`} 
                            type="text" value={tasks} 
                            onChange={()=>handleTextInput(index, document.getElementById(`text ${index}`).value)}
                            onKeyDown={handleKeyDown}
                        />
                    </label>
                )}
            </ol>
        </>
    );
}