import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import TodoSummary from "./components/todoSummary";
import useTodo from "./hooks/useTodo";

function App() {
  const {
    todos,
    addTodoFunction,
    setTodoCompleted,
    deleteAllCompleted,
    deleteTodo,
  } = useTodo();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodo onSubmit={addTodoFunction} />
        <TodoList
          todos={todos}
          setTodoCompleted={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </main>
  );
}

export default App;
