const TodoFooter = ({todos,completedTodos,onRemoveALlCompletedTodos})=>{
    return (
        <div className = "todo-footer">
 <span>{completedTodos}/{todos.length} is completed</span>
 <button onClick={ onRemoveALlCompletedTodos}>Clear all completed</button>
        </div>
    )
}
export default TodoFooter;
