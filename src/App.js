import { useReducer } from "react";
import TodoHeader from "./components/todo-Header/todoHeader";
import ToDoListItems from "./components/todo-list-item/todoListItems";
import TodoFooter from "./components/todo-Footer/todoFooter";


const reducer = (todos,action) => {
 if(action.type === "ADD"){
  return [
    ...todos,
    {
      id:new Date().getTime(),
      text :action.payload.text,
      isCompleted: false,
    }
  ];
 }else if(action.type === "REMOVE"){
return todos.filter((todo)=>todo.id !== action.payload.id)
 }else if (action.type === "COMPLETED"){
  
  return todos.map((todo)=>{
    if(todo.id === action.payload.id){
      return {
      ...todo,
      isCompleted:!todo.isCompleted
    }
    }
    return todo;
  })
 }else if(action.type === "REMOVE_ALL_COMPLETED"){
  return todos.filter(todo=> !todo.isCompleted )
 }
};
function App() {
   const[todos,dispatch] = useReducer(reducer,[])

   return (
    <div className="App">
      <TodoHeader
      onAddToDo = {(text)=> {
        dispatch({
          type: "ADD",
          payload: {
            text:text
          }
        }

        )
      }

      }
      />
      <ToDoListItems
      todos= {todos}
      onRemoveTodo ={(id)=>{
        dispatch({
          type: "REMOVE",
          payload:{
            id:id,
          }
        })
      }}
      onCompletedTodo = {(id)=>{
        dispatch({
          type:"COMPLETED",
          payload:{
              id
          }
        })
      }}
       />
       {
        todos.length > 0 ?
        <TodoFooter
      todos={todos}
      completedTodos={ todos.filter(todo => todo.isCompleted).length}
      onRemoveALlCompletedTodos = {()=>{
        dispatch:{
          type: "REMOVE_ALL_COMPLETED"
          payload:{
            isCompleted
          } 
        }
      }}
     /> 
     :null
       }
      
    </div>
  );
}

export default App;
