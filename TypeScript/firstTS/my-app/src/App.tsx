import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
// import { todoListState } from "./states/atom";
function App() {
  const [todos, setTodo] = useState<Todo[]>([]);
  // useState -> useRecoilState 리코일으로 변경
  // const [todos, setTodo] = useRecoilState(todoListState);

  const todoAddHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodo((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const todoRemoveHandler = (todoId: string) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <RecoilRoot>
      <div className="App">
        <NewTodo onAddTodo={todoAddHandler}></NewTodo>
        <Todos items={todos} onRemoveTodo={todoRemoveHandler}></Todos>
      </div>
    </RecoilRoot>
  );
}

export default App;
