import {useState} from "react";


const TodoHeader = ({onAddToDo}) => {
    const [value, setValue] = useState("");
    const onFormSubmit = (e )=>{
     e.preventDefault();
     onAddToDo(value);
     setValue("");
    }
    return (
        <div className = "todo-header">
     <form onSubmit= {onFormSubmit}>
        <input 
        onChange = { (e)=>  setValue(e.target.value)}
         type = "text"
         placeholder = "Type here..."
        />
        <button >
             Add 
        </button>
     </form>
        </div>
    )
}

export default TodoHeader;