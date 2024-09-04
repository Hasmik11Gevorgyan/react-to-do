import TodoListItem from "../todo-list-items/todoListItem";

const ToDoListItems = ({todos, onRemoveTodo,onCompletedTodo})=>{
    return (
        <div className ="todo-list-items">
  <TodoListItem 
   todos={todos} 
   onRemoveTodo =    {onRemoveTodo}
   onCompletedTodo = {onCompletedTodo}
  />
        </div>
    )
}

export default ToDoListItems;
